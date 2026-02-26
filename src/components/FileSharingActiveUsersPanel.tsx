import styled from 'styled-components'
import { VscGraph } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegFileVideo } from "react-icons/fa";
import { LiaUserSolid } from "react-icons/lia";


const Row = styled.section`
  margin: 0 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7e
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  padding: 18px 22px 20px;
`


const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  margin-bottom: 30px;
`;

const HeaderLeftGroup = styled.div`
  
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MonthSelect = styled.div`
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
   border: 2px solid #F5F5F5;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #374151;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  background: #F6F6F6;
  color: #6b7280;
  border-radius: 8px;
  cursor: pointer;
  
`;

const IconBoxTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 40px;
  border: 2px solid #F5F5F5;
  background: transparent;
  color: #6b7280;
  border-radius: 8px;
  cursor: pointer;
`;

const IconBoxThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 40px;
  border: none ;
  background: #EEF2FF;
  color: #536AFF;
  border-radius: 8px;
  cursor: pointer;
`;


const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const CardSubtitle = styled.p`
  font-size: 12px;
  color: #8E8E8E;
  margin: 5px 0 0 0;
`

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
  border-radius:8px;
  border:2px solid #E9E9E9;
  height: 50px;
  padding: 10px 10px;
  justify-content: space-between;
  
`

const UserMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`

const Flag = styled.span`
  font-size: 40px;
  border-radius:8px;
`

const CountryName = styled.span`
  font-size: 14px;
  color: #A2A2A2;
`

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:3px;
  max-width: 270px;
  width:100%;
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
  margin-bottom: -20px;
 
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
  { flag: '🇺🇸', name: 'United States', percent: 78 }
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
      <Card>
        <CardHeader>
          <CardHeader>
            <HeaderLeftGroup>
              <HeaderLeft>
                <IconBox><FaRegFileVideo /></IconBox>
                <Title>File Sharing</Title>
              </HeaderLeft>
              <CardSubtitle>Keep track of files and how they are shared</CardSubtitle>
            </HeaderLeftGroup>

            <HeaderRight>
              <IconBoxThree><VscGraph fontSize={18} />  </IconBoxThree>
              <IconBoxTwo> <BsGraphUp /> </IconBoxTwo>

              <MonthSelect>
                Month <MdOutlineKeyboardArrowDown fontSize={30} />
              </MonthSelect>
            </HeaderRight>
          </CardHeader>
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

          <HeaderLeft>
            <IconBox><LiaUserSolid /></IconBox>
            <Title>Active Users</Title>
          </HeaderLeft>
          <HeaderRight>
            <MonthSelect>
              Month <MdOutlineKeyboardArrowDown fontSize={30} />
            </MonthSelect>
          </HeaderRight>
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

                </UserMeta>
                <ProgressContainer>
                  <CountryName>{user.name}</CountryName>
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

