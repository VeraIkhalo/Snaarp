import { useState } from 'react'
import styled from 'styled-components'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay
} from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

type WidgetId =
  | 'users'
  | 'groups'
  | 'uploads'
  | 'departments'
  | 'storage'
  | 'fileSharing'
  | 'activeUsers'

type Widget = {
  id: WidgetId
  title: string
  subtitle?: string
}

type ColumnId = 'topRow' | 'middleRow' | 'rightColumn'

type Column = {
  id: ColumnId
  title: string
  widgetIds: WidgetId[]
}

type BoardState = {
  widgets: Record<WidgetId, Widget>
  columns: Record<ColumnId, Column>
  columnOrder: ColumnId[]
}

const BoardRoot = styled.main`
  background: transparent;
  overflow-y: auto;
`

const BoardTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

const BoardTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const ColumnStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ColumnContainer = styled.section`
  background: #f9fafb;
  border-radius: 16px;
  padding: 16px;
  border: 1px dashed #e5e7eb;
`

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

const ColumnTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  margin: 0;
`

const ColumnHint = styled.span`
  font-size: 12px;
  color: #9ca3af;
`

const WidgetList = styled.div<{ isDraggingOver: boolean }>`
  min-height: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  padding: 4px;
  border-radius: 12px;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? '#e0f2fe' : 'transparent'};
  transition: background-color 150ms ease;
`

const WidgetCard = styled.article<{ isDragging: boolean; transform?: string }>`
  background: #ffffff;
  border-radius: 12px;
  padding: 14px 16px;
  border: 1px solid ${({ isDragging }) =>
    isDragging ? '#4f46e5' : '#e5e7eb'};
  box-shadow: ${({ isDragging }) =>
    isDragging
      ? '0 8px 16px rgba(15, 23, 42, 0.25)'
      : '0 1px 2px rgba(15, 23, 42, 0.05)'};
  cursor: grab;
  display: flex;
  flex-direction: column;
  gap: 4px;
  outline: none;
  transform: ${({ transform }) => transform || 'none'};
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  transition: opacity 200ms ease;

  &:active {
    cursor: grabbing;
  }

  &:focus-visible {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
`

const WidgetTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
`

const WidgetSubtitle = styled.div`
  font-size: 12px;
  color: #9ca3af;
`

const VerticalWidgetList = styled(WidgetList)`
  grid-template-columns: 1fr;
  min-height: 200px;
`

const initialState: BoardState = {
  widgets: {
    users: { id: 'users', title: 'Users', subtitle: 'Total users widget' },
    groups: { id: 'groups', title: 'Groups', subtitle: 'User groups widget' },
    uploads: {
      id: 'uploads',
      title: 'Uploads',
      subtitle: 'Uploads over time'
    },
    departments: {
      id: 'departments',
      title: 'Departments',
      subtitle: 'Departments activity'
    },
    storage: {
      id: 'storage',
      title: 'Storage',
      subtitle: 'Storage donut chart'
    },
    fileSharing: {
      id: 'fileSharing',
      title: 'File Sharing',
      subtitle: 'File sharing bar chart'
    },
    activeUsers: {
      id: 'activeUsers',
      title: 'Active Users',
      subtitle: 'Location map & list'
    }
  },
  columns: {
    topRow: {
      id: 'topRow',
      title: 'Top row widgets',
      widgetIds: ['users', 'groups', 'uploads', 'departments']
    },
    middleRow: {
      id: 'middleRow',
      title: 'Middle row widgets',
      widgetIds: ['fileSharing', 'activeUsers']
    },
    rightColumn: {
      id: 'rightColumn',
      title: 'Right column widgets',
      widgetIds: ['storage']
    }
  },
  columnOrder: ['topRow', 'middleRow', 'rightColumn']
}

function SortableWidget({
  widget,
  columnId
}: {
  widget: Widget
  columnId: ColumnId
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: widget.id,
    data: {
      type: 'widget',
      widget,
      columnId
    }
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <WidgetCard
      ref={setNodeRef}
      style={style}
      isDragging={isDragging}
      {...attributes}
      {...listeners}
      aria-label={widget.title}
      tabIndex={0}
    >
      <WidgetTitle>{widget.title}</WidgetTitle>
      {widget.subtitle && <WidgetSubtitle>{widget.subtitle}</WidgetSubtitle>}
    </WidgetCard>
  )
}

function SortableColumn({
  column,
  widgets,
  setBoard
}: {
  column: Column
  widgets: Widget[]
  setBoard: React.Dispatch<React.SetStateAction<BoardState>>
}) {
  const isVertical = column.id === 'rightColumn'
  const strategy = isVertical
    ? verticalListSortingStrategy
    : horizontalListSortingStrategy

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over || active.id === over.id) return

    const activeWidgetId = active.id as WidgetId
    const overWidgetId = over.id as WidgetId

    const activeIndex = column.widgetIds.indexOf(activeWidgetId)
    const overIndex = column.widgetIds.indexOf(overWidgetId)

    if (activeIndex === -1 || overIndex === -1) return

    const newWidgetIds = arrayMove(column.widgetIds, activeIndex, overIndex)

    setBoard(prev => ({
      ...prev,
      columns: {
        ...prev.columns,
        [column.id]: {
          ...column,
          widgetIds: newWidgetIds
        }
      }
    }))
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <ColumnContainer aria-label={column.title} role="region">
        <ColumnHeader>
          <ColumnTitle>{column.title}</ColumnTitle>
          <ColumnHint>
            {isVertical ? 'Drop widgets here' : 'Drag widgets to rearrange'}
          </ColumnHint>
        </ColumnHeader>

        <SortableContext
          items={column.widgetIds}
          strategy={strategy}
        >
          {isVertical ? (
            <VerticalWidgetList isDraggingOver={false}>
              {widgets.map(widget => (
                <SortableWidget
                  key={widget.id}
                  widget={widget}
                  columnId={column.id}
                />
              ))}
            </VerticalWidgetList>
          ) : (
            <WidgetList isDraggingOver={false}>
              {widgets.map(widget => (
                <SortableWidget
                  key={widget.id}
                  widget={widget}
                  columnId={column.id}
                />
              ))}
            </WidgetList>
          )}
        </SortableContext>
      </ColumnContainer>
    </DndContext>
  )
}

export function DragDropBoard() {
  const [board, setBoard] = useState<BoardState>(initialState)
  const [activeId, setActiveId] = useState<WidgetId | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as WidgetId)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    setActiveId(null)

    if (!over) return

    const activeId = active.id as WidgetId
    const overId = over.id as WidgetId

    let sourceColumnId: ColumnId | null = null
    let destinationColumnId: ColumnId | null = null
    let sourceIndex = -1
    let destinationIndex = -1

    for (const [colId, col] of Object.entries(board.columns)) {
      const activeIdx = col.widgetIds.indexOf(activeId)
      const overIdx = col.widgetIds.indexOf(overId)

      if (activeIdx !== -1) {
        sourceColumnId = colId as ColumnId
        sourceIndex = activeIdx
      }
      if (overIdx !== -1) {
        destinationColumnId = colId as ColumnId
        destinationIndex = overIdx
      }
    }

    if (!sourceColumnId || !destinationColumnId) return

    if (sourceColumnId === destinationColumnId) {
      const column = board.columns[sourceColumnId]
      const newWidgetIds = arrayMove(
        column.widgetIds,
        sourceIndex,
        destinationIndex
      )

      setBoard(prev => ({
        ...prev,
        columns: {
          ...prev.columns,
          [sourceColumnId!]: {
            ...column,
            widgetIds: newWidgetIds
          }
        }
      }))
      return
    }

    const sourceColumn = board.columns[sourceColumnId]
    const destColumn = board.columns[destinationColumnId]

    const newSourceWidgetIds = sourceColumn.widgetIds.filter(
      id => id !== activeId
    )
    const newDestWidgetIds = [...destColumn.widgetIds]
    newDestWidgetIds.splice(destinationIndex, 0, activeId)

    setBoard(prev => ({
      ...prev,
      columns: {
        ...prev.columns,
        [sourceColumnId]: {
          ...sourceColumn,
          widgetIds: newSourceWidgetIds
        },
        [destinationColumnId]: {
          ...destColumn,
          widgetIds: newDestWidgetIds
        }
      }
    }))
  }

  const activeWidget = activeId ? board.widgets[activeId] : null

  return (
    <BoardRoot aria-label="Dashboard layout builder">
      <BoardTitleRow>
        <BoardTitle>Cloud Network layout</BoardTitle>
      </BoardTitleRow>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <BoardGrid>
          <ColumnStack>
            {['topRow', 'middleRow'].map(columnId => {
              const column = board.columns[columnId as ColumnId]
              const widgets = column.widgetIds.map(
                widgetId => board.widgets[widgetId]
              )

              return (
                <SortableColumn
                  key={column.id}
                  column={column}
                  widgets={widgets}
                  setBoard={setBoard}
                />
              )
            })}
          </ColumnStack>

          {(() => {
            const column = board.columns.rightColumn
            const widgets = column.widgetIds.map(
              widgetId => board.widgets[widgetId]
            )

            return (
              <SortableColumn
                key={column.id}
                column={column}
                widgets={widgets}
                setBoard={setBoard}
              />
            )
          })()}
        </BoardGrid>

        <DragOverlay>
          {activeWidget ? (
            <WidgetCard isDragging style={{ cursor: 'grabbing' }}>
              <WidgetTitle>{activeWidget.title}</WidgetTitle>
              {activeWidget.subtitle && (
                <WidgetSubtitle>{activeWidget.subtitle}</WidgetSubtitle>
              )}
            </WidgetCard>
          ) : null}
        </DragOverlay>
      </DndContext>
    </BoardRoot>
  )
}
