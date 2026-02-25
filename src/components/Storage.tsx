import styled from 'styled-components'

const StorageCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  width: 400px;
  flex-shrink: 0;
`

const StorageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
`

const StorageIcon = styled.div`
  display: flex;
  align-items: center;
  color: #6b7280;
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const StorageTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`

const StorageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`

const ChartWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`

const DonutChart = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`

const ChartCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
`

const Percentage = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #111827;
  line-height: 1;
  margin-bottom: 4px;
`

const PercentageLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
`

const StorageInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const NoteAlert = styled.div`
  border: 2px solid #fbbf24;
  border-radius: 8px;
  padding: 16px;
  background: #fffbeb;
`

const NoteHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`

const NoteIcon = styled.div`
  color: #f59e0b;
  display: flex;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const NoteTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #92400e;
`

const NoteText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 6px 0;
`

const NoteDescription = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const LegendColor = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  flex-shrink: 0;
`

const LegendLabel = styled.span`
  font-size: 14px;
  color: #6b7280;
`

const UpgradeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background: #f3e8ff;
  border: 2px solid #9333ea;
  border-radius: 8px;
  color: #6b21a8;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  margin-top: 4px;
  align-self: flex-end;
  
  &:hover {
    background: #e9d5ff;
    border-color: #7e22ce;
    color: #581c87;
  }
  
  &:active {
    transform: scale(0.98);
  }
`

const LightningIcon = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    width: 16px;
    height: 16px;
  }
`

export function Storage() {
  // Storage data - percentages add up to 100%
  // 80% used total, 20% available
  const storageData = [
    { label: 'Files', color: '#9333ea', percentage: 15 }, // Purple
    { label: 'Folders', color: '#f97316', percentage: 12 }, // Orange
    { label: 'Videos', color: '#10b981', percentage: 18 }, // Green
    { label: 'Apps', color: '#3b82f6', percentage: 10 }, // Light Blue
    { label: 'Audios', color: '#ef4444', percentage: 12 }, // Red
    { label: 'Miscellaneous', color: '#1e40af', percentage: 13 }, // Dark Blue
    { label: 'Available Space', color: '#e5e7eb', percentage: 20 } // Light Gray
  ]

  const radius = 80
  const strokeWidth = 20
  const centerX = 100
  const centerY = 100
  const circumference = 2 * Math.PI * radius

  let cumulativeLength = 0

  const segments = storageData.map((item) => {
    const segmentLength = (item.percentage / 100) * circumference
    const dashOffset = circumference - cumulativeLength
    cumulativeLength += segmentLength

    return {
      ...item,
      strokeDasharray: segmentLength,
      strokeDashoffset: dashOffset
    }
  })

  return (
    <StorageCard>
      <StorageHeader>
        <StorageIcon>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="2"
              y="4"
              width="16"
              height="12"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <rect
              x="2"
              y="8"
              width="16"
              height="12"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </StorageIcon>
        <StorageTitle>Storage</StorageTitle>
      </StorageHeader>

      <StorageContent>
        <ChartContainer>
          <ChartWrapper>
            <DonutChart viewBox="0 0 200 200">
              {/* Segments */}
              {segments.map((segment, index) => (
                <circle
                  key={index}
                  cx={centerX}
                  cy={centerY}
                  r={radius}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${segment.strokeDasharray} ${circumference}`}
                  strokeDashoffset={segment.strokeDashoffset}
                  strokeLinecap="round"
                />
              ))}

              {/* Dotted blue circle inside */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius - strokeWidth / 2 - 5}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.6"
              />
            </DonutChart>
            <ChartCenter>
              <Percentage>80%</Percentage>
              <PercentageLabel>Used</PercentageLabel>
            </ChartCenter>
          </ChartWrapper>
        </ChartContainer>

        <StorageInfo>
          <NoteAlert>
            <NoteHeader>
              <NoteIcon>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 12H9v-4h2v4zm0-6H9V6h2v2z"
                    clipRule="evenodd"
                  />
                </svg>
              </NoteIcon>
              <NoteTitle>Note</NoteTitle>
            </NoteHeader>
            <NoteText>You've almost reached your limit</NoteText>
            <NoteDescription>
              You have used 80% of your available storage. Upgrade plan to
              access more space.
            </NoteDescription>
          </NoteAlert>

          <Legend>
            {storageData.map((item, index) => (
              <LegendItem key={index}>
                <LegendColor color={item.color} />
                <LegendLabel>{item.label}</LegendLabel>
              </LegendItem>
            ))}
          </Legend>

          <UpgradeButton>
            <LightningIcon>
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 2L10 6L14 7L10 8L8 12L6 8L2 7L6 6L8 2Z" />
              </svg>
            </LightningIcon>
            Upgrade Plan
          </UpgradeButton>
        </StorageInfo>
      </StorageContent>
    </StorageCard>
  )
}

