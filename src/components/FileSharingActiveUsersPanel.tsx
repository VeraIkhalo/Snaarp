import styled from 'styled-components'

// Layout container for the two cards
const Row = styled.section`
  margin: 0 24px 24px;
  display: grid;
  grid-template-columns: 1.6fr 1.4fr;
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  padding: 18px 22px 20px;
`

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

const CardHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const CardTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const CardIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4b5563;
`

const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`

const CardSubtitle = styled.p`
  font-size: 12px;
  color: #9ca3af;
  margin: 0;
`

const CardHeaderRight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`

const IconButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const DropdownButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #6b7280;
  font-size: 12px;
  cursor: pointer;
`

// ------- File Sharing left card -------

const FileSharingBody = styled.div`
  padding-top: 4px;
`

const ChartWrapper = styled.div`
  background: #f9fafb;
  border-radius: 12px;
  padding: 16px 16px 12px;
`

const ChartSvg = styled.svg`
  width: 100%;
  height: 140px;
`

const LegendRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 10px;
  font-size: 11px;
  color: #6b7280;
`

const LegendItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

const LegendDot = styled.span<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background-color: ${({ color }) => color};
`

// ------- Active Users right card -------

const ActiveUsersBody = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.3fr);
  gap: 18px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const MapCard = styled.div`
  border-radius: 14px;
  background: #f9fafb;
  position: relative;
  padding: 16px;
  min-height: 180px;
  overflow: hidden;
`

const MapGrid = styled.div`
  position: absolute;
  inset: 10px 12px;
  background-image: linear-gradient(
      to right,
      rgba(229, 231, 235, 0.6) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(229, 231, 235, 0.6) 1px,
      transparent 1px
    );
  background-size: 24px 24px;
  opacity: 0.7;
`

const MapPin = styled.div<{ color: string }>`
  position: absolute;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ color }) => color};
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
`

const MapPinLabel = styled.span``

const UsersList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const UserRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

const UserMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`

const Flag = styled.span`
  font-size: 16px;
`

const CountryName = styled.span`
  font-size: 13px;
  color: #111827;
  white-space: nowrap;
`

const ProgressContainer = styled.div`
  flex: 1;
  max-width: 150px;
`

const ProgressBarTrack = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #e5e7eb;
  overflow: hidden;
`

const ProgressBarFill = styled.div<{ percent: number }>`
  width: ${({ percent }) => `${percent}%`};
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #22c55e, #16a34a);
`

const UserPercent = styled.span`
  font-size: 12px;
  color: #6b7280;
  width: 40px;
  text-align: right;
`

type UserStat = {
  flag: string
  name: string
  percent: number
}

const users: UserStat[] = [
  { flag: '🇬🇧', name: 'United Kingdom', percent: 78 },
  { flag: '🇳🇬', name: 'Nigeria', percent: 61 },
  { flag: '🇦🇪', name: 'UAE', percent: 45 },
  { flag: '🇨🇦', name: 'Canada', percent: 59 },
  { flag: '🇺🇸', name: 'United States of America', percent: 78 }
]

export function FileSharingActiveUsersPanel() {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ]

  const values = [20, 32, 28, 40, 50, 80, 60, 55, 58, 62, 54, 49]

  const max = 100

  const barWidth = 18
  const gap = 10
  const chartHeight = 90
  const baseY = 100

  return (
    <Row aria-label="File sharing and active users">
      {/* File Sharing card */}
      <Card>
        <CardHeader>
          <CardHeaderLeft>
            <CardTitleRow>
              <CardIcon>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="3"
                    width="12"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    fill="none"
                  />
                  <path
                    d="M5 6h6M5 8h4M5 10h3"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </CardIcon>
              <CardTitle>File Sharing</CardTitle>
            </CardTitleRow>
            <CardSubtitle>Keep track of files and how they&apos;re shared</CardSubtitle>
          </CardHeaderLeft>

          <CardHeaderRight>
            <IconButton aria-label="Chart view">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <rect x="2" y="9" width="2" height="5" rx="1" fill="#4f46e5" />
                <rect x="7" y="5" width="2" height="9" rx="1" fill="#4f46e5" />
                <rect x="12" y="3" width="2" height="11" rx="1" fill="#4f46e5" />
              </svg>
            </IconButton>
            <DropdownButton type="button">
              Month <span aria-hidden="true">▾</span>
            </DropdownButton>
          </CardHeaderRight>
        </CardHeader>

        <FileSharingBody>
          <ChartWrapper>
            <ChartSvg viewBox="0 0 260 120" preserveAspectRatio="none">
              {/* horizontal grid lines */}
              {[0, 25, 50, 75, 100].map((y, idx) => (
                <line
                  key={y}
                  x1="0"
                  x2="260"
                  y1={baseY - (y / max) * chartHeight}
                  y2={baseY - (y / max) * chartHeight}
                  stroke="#e5e7eb"
                  strokeWidth={idx === 0 ? 1.2 : 0.6}
                />
              ))}

              {/* bars */}
              {values.map((val, i) => {
                const height = (val / max) * chartHeight
                const x = i * (barWidth + gap) + 8
                const isJune = i === 5
                return (
                  <g key={months[i]}>
                    <rect
                      x={x}
                      y={baseY - height}
                      width={barWidth}
                      height={height}
                      rx="4"
                      fill={isJune ? '#2563eb' : '#3b82f6'}
                    />
                    {isJune && (
                      <g>
                        <rect
                          x={x - 6}
                          y={baseY - height - 32}
                          width={barWidth + 18}
                          height="22"
                          rx="6"
                          fill="#111827"
                          opacity="0.9"
                        />
                        <text
                          x={x + barWidth / 2 + 3}
                          y={baseY - height - 18}
                          textAnchor="middle"
                          fontSize="9"
                          fill="#ffffff"
                        >
                          JUNE  Public: 80
                        </text>
                      </g>
                    )}
                  </g>
                )
              })}

              {/* month labels */}
              {months.map((m, i) => {
                const x = i * (barWidth + gap) + barWidth / 2 + 8
                return (
                  <text
                    key={m}
                    x={x}
                    y={115}
                    fontSize="8"
                    fill="#9ca3af"
                    textAnchor="middle"
                  >
                    {m}
                  </text>
                )
              })}
            </ChartSvg>

            <LegendRow>
              <LegendItem>
                <LegendDot color="#93c5fd" />
                <span>Public</span>
              </LegendItem>
              <LegendItem>
                <LegendDot color="#2563eb" />
                <span>Anyone with link</span>
              </LegendItem>
              <LegendItem>
                <LegendDot color="#1d4ed8" />
                <span>Within Organisation</span>
              </LegendItem>
            </LegendRow>
          </ChartWrapper>
        </FileSharingBody>
      </Card>

      {/* Active Users card */}
      <Card>
        <CardHeader>
          <CardHeaderLeft>
            <CardTitleRow>
              <CardIcon>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <circle
                    cx="8"
                    cy="5"
                    r="2.5"
                    stroke="currentColor"
                    fill="none"
                  />
                  <path
                    d="M3.5 12.5C4 10.5 5.7 9 8 9c2.3 0 4 1.5 4.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </CardIcon>
              <CardTitle>Active Users</CardTitle>
            </CardTitleRow>
          </CardHeaderLeft>
          <CardHeaderRight>
            <DropdownButton type="button">
              Month <span aria-hidden="true">▾</span>
            </DropdownButton>
          </CardHeaderRight>
        </CardHeader>

        <ActiveUsersBody>
          <MapCard aria-hidden="true">
            <MapGrid />
            <MapPin color="#2563eb" style={{ top: '34%', left: '40%' }}>
              <MapPinLabel>Stanley</MapPinLabel>
            </MapPin>
            <MapPin color="#f97316" style={{ bottom: '20%', left: '18%' }}>
              <MapPinLabel>Samuel</MapPinLabel>
            </MapPin>
            <MapPin color="#22c55e" style={{ bottom: '26%', right: '14%' }}>
              <MapPinLabel>Chisom</MapPinLabel>
            </MapPin>
          </MapCard>

          <UsersList>
            {users.map(user => (
              <UserRow key={user.name}>
                <UserMeta>
                  <Flag>{user.flag}</Flag>
                  <CountryName>{user.name}</CountryName>
                </UserMeta>
                <ProgressContainer>
                  <ProgressBarTrack>
                    <ProgressBarFill percent={user.percent} />
                  </ProgressBarTrack>
                </ProgressContainer>
                <UserPercent>{user.percent}%</UserPercent>
              </UserRow>
            ))}
          </UsersList>
        </ActiveUsersBody>
      </Card>
    </Row>
  )
}

