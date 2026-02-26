import styled from 'styled-components'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
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
  border: 1px solid #e5e7eb;
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
  border-radius: 12px;
  padding: 16px 16px 12px;
  width: 100%;
  height: 250px;
  margin-top:-30px;
`

const TooltipBox = styled.div`
  background: #BFBFBF;
  color: #fff;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 13px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`

const TooltipTitle = styled.div`
  font-weight: 600;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`

const TooltipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
`

const TooltipDot = styled.span<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({ color }) => color};
`

const LegendRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 12px;
  padding-top: 8px;
  justify-content: center;
  font-size: 12px;
  color: #374151;
`

const LegendItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

const LegendSquare = styled.span<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${({ color }) => color};
`

const fileSharingChartData = [
  { name: 'JAN', Public: 45, 'Anyone with link': 25, 'Within Organisation': 35 },
  { name: 'FEB', Public: 60, 'Anyone with link': 35, 'Within Organisation': 55 },
  { name: 'MAR', Public: 48, 'Anyone with link': 30, 'Within Organisation': 40 },
  { name: 'APR', Public: 45, 'Anyone with link': 28, 'Within Organisation': 38 },
  { name: 'MAY', Public: 70, 'Anyone with link': 50, 'Within Organisation': 60 },
  { name: 'JUN', Public: 80, 'Anyone with link': 55, 'Within Organisation': 65 },
  { name: 'JUL', Public: 60, 'Anyone with link': 50, 'Within Organisation': 55 },
  { name: 'AUG', Public: 48, 'Anyone with link': 22, 'Within Organisation': 40 },
  { name: 'SEP', Public: 45, 'Anyone with link': 30, 'Within Organisation': 35 },
  { name: 'OCT', Public: 48, 'Anyone with link': 35, 'Within Organisation': 40 },
  { name: 'NOV', Public: 65, 'Anyone with link': 40, 'Within Organisation': 55 },
  { name: 'DEC', Public: 48, 'Anyone with link': 22, 'Within Organisation': 40 },
]

const COLORS = {
  public: '#2A30D8',
  link: '#3641F5',
  org: '#5268FF',
}

const MONTH_LABELS: Record<string, string> = {
  JAN: 'JANUARY', FEB: 'FEBRUARY', MAR: 'MARCH', APR: 'APRIL', MAY: 'MAY', JUN: 'JUNE',
  JUL: 'JULY', AUG: 'AUGUST', SEP: 'SEPTEMBER', OCT: 'OCTOBER', NOV: 'NOVEMBER', DEC: 'DECEMBER',
}

function FileSharingTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload?.length || !label) return null
  const item = payload[0]
  const title = MONTH_LABELS[label] || label
  const color = item.name === 'Public' ? COLORS.public : item.name === 'Anyone with link' ? COLORS.link : COLORS.org
  return (
    <TooltipBox>
      <TooltipTitle>{title}</TooltipTitle>
      <TooltipRow>
        <TooltipDot color={color} />
        <span>{item.name}: {item.value}</span>
      </TooltipRow>
    </TooltipBox>
  )
}

function BarWithShadow(props: {
  x?: number
  y?: number
  width?: number
  height?: number
  fill?: string
  radius?: number
}) {
  const { x = 0, y = 0, width = 0, height = 0, fill = '#2563eb', radius = 6 } = props
  if (height <= 0) return null
  const offset = 1.2
  return (
    <g>
      <rect
        x={x + offset}
        y={y + offset}
        width={width}
        height={height}
        rx={radius}
        ry={radius}
        fill="rgba(0,0,0,0.07)"
      />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={radius}
        ry={radius}
        fill={fill}
      />
    </g>
  )
}

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
              <CardSubtitle>Keep track of files and how they're shared</CardSubtitle>
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
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={fileSharingChartData}
                margin={{ top: 16, right: 16, left: 4, bottom: 8 }}
                barGap={6}
                barCategoryGap={14}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                  strokeWidth={1}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  dy={6}
                />
                <YAxis
                  domain={[0, 100]}
                  ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#9ca3af' }}
                  width={24}
                  dx={-4}
                />
                <Tooltip content={<FileSharingTooltip />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
                <Bar
                  dataKey="Public"
                  fill={COLORS.public}
                  radius={[6, 6, 0, 0]}
                  barSize={14}
                  shape={(p) => <BarWithShadow {...p} radius={6} />}
                />
                <Bar
                  dataKey="Anyone with link"
                  fill={COLORS.link}
                  radius={[6, 6, 0, 0]}
                  barSize={14}
                  shape={(p) => <BarWithShadow {...p} radius={6} />}
                />
                <Bar
                  dataKey="Within Organisation"
                  fill={COLORS.org}
                  radius={[6, 6, 0, 0]}
                  barSize={14}
                  shape={(p) => <BarWithShadow {...p} radius={6} />}
                />
              </BarChart>
            </ResponsiveContainer>
            <LegendRow>
              <LegendItem><LegendSquare color={COLORS.public} /> Public</LegendItem>
              <LegendItem><LegendSquare color={COLORS.link} /> Anyone with link</LegendItem>
              <LegendItem><LegendSquare color={COLORS.org} /> Within Organisation</LegendItem>
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

