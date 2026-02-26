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
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { MdDragIndicator } from 'react-icons/md'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { CloudNetwork } from './components/CloudNetwork'
import { CloudNetworkPanel } from './components/CloudNetworkPanel'
import { FileSharingActiveUsersPanel } from './components/FileSharingActiveUsersPanel'
import DeviceManagementDashboard from './components/DeviceManagementDashboard'
import ProductivityReport from './components/ProductivityReport'
import EmailChart from './components/EmailChart'

const AppShell = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f6f6f6;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  color: #111827;
`

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

type PanelId =
  | 'cloudNetworkPanel'
  | 'fileSharing'
  | 'deviceManagement'
  | 'productivityReport'
  | 'emailChart'

const PANEL_ORDER: PanelId[] = [
  'cloudNetworkPanel',
  'fileSharing',
  'deviceManagement',
  'productivityReport',
  'emailChart'
]

const SortableSection = styled.div<{ $isDragging?: boolean }>`
  position: relative;
  cursor: grab;
  opacity: ${({ $isDragging }) => ($isDragging ? 0.6 : 1)};
  transition: opacity 0.2s ease;

  &:active {
    cursor: grabbing;
  }

  &:focus-visible {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
`

const DragHandle = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  padding: 4px;
  color: #9ca3af;
  border-radius: 4px;
  pointer-events: none;

  ${SortableSection}:hover & {
    color: #6b7280;
  }
`

const panelLabels: Record<PanelId, string> = {
  cloudNetworkPanel: 'Cloud Network Panel',
  fileSharing: 'File Sharing & Active Users',
  deviceManagement: 'Device Management',
  productivityReport: 'Productivity Report',
  emailChart: 'Email Chart'
}

function SortablePanel({
  id,
  children
}: {
  id: PanelId
  children: React.ReactNode
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <SortableSection
      ref={setNodeRef}
      style={style}
      $isDragging={isDragging}
      {...attributes}
      {...listeners}
      tabIndex={0}
      aria-label={`Section: ${panelLabels[id]}. Drag to reorder.`}
    >
      <DragHandle aria-hidden>
        <MdDragIndicator size={20} />
      </DragHandle>
      {children}
    </SortableSection>
  )
}

const OverlayCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px 44px 16px 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e7eb;
  cursor: grabbing;
  font-size: 14px;
  font-weight: 500;
  color: #111827;
`

const panelById: Record<PanelId, React.ReactNode> = {
  cloudNetworkPanel: <CloudNetworkPanel />,
  fileSharing: <FileSharingActiveUsersPanel />,
  deviceManagement: <DeviceManagementDashboard />,
  productivityReport: <ProductivityReport />,
  emailChart: <EmailChart />
}

function App() {
  const [panelOrder, setPanelOrder] = useState<PanelId[]>(() => PANEL_ORDER)
  const [activeId, setActiveId] = useState<PanelId | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as PanelId)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveId(null)
    if (!over || active.id === over.id) return
    const oldIndex = panelOrder.indexOf(active.id as PanelId)
    const newIndex = panelOrder.indexOf(over.id as PanelId)
    if (oldIndex === -1 || newIndex === -1) return
    setPanelOrder(arrayMove(panelOrder, oldIndex, newIndex))
  }

  return (
    <AppShell>
      <Sidebar />
      <AppContent>
        <Header />
        <CloudNetwork />
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={panelOrder}
            strategy={verticalListSortingStrategy}
          >
            {panelOrder.map(id => (
              <SortablePanel key={id} id={id}>
                {panelById[id]}
              </SortablePanel>
            ))}
          </SortableContext>
          <DragOverlay>
            {activeId ? (
              <OverlayCard>{panelLabels[activeId]}</OverlayCard>
            ) : null}
          </DragOverlay>
        </DndContext>
      </AppContent>
    </AppShell>
  )
}

export default App
