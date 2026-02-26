import styled from "styled-components";
import { FiMonitor, FiUsers, FiMail, FiDownload } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown, MdMarkEmailRead, MdDrafts } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import { GiUnplugged } from "react-icons/gi";
import { FaApple, FaWindows, FaBuilding } from "react-icons/fa";
import { PiLinuxLogoThin } from "react-icons/pi";

const Wrapper = styled.div`
  background: #F6F6F6;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #FFFFFF;
  padding:10px;
  border-radius:8px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: none;
  background: #F6F6F6;
  color: #6b7280;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const UpgradePlanGroup = styled.div`
 display:flex;
 gap:25px;
 align-items:center;
`;

const UpgradeButton = styled.button`
  background: #4f6ef7;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap:8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const Group = styled.div`
 display:flex;
 align-items:flex-end;
 justify-content:space-between;
`;


const ChartSvg = styled.svg`
  width: 150px;
  height: 100px;
  
`


const LargeCard = styled(Card)`
  grid-column: span 1;
`;

const LargeCardCol1 = styled(LargeCard)`
  grid-column: 1;
  grid-row: 2;
`;

const LargeCardCol2 = styled(LargeCard)`
  grid-column: 2;
  grid-row: 2;
`;

const LargeCardCol3 = styled(LargeCard)`
  grid-column: 3;
  grid-row: 2;
`;

const EmailStatusRow = styled.div`
  display: flex;
  align-items: center;
  min-height: 72px;
`;

const EmailStatusSection = styled.div<{ hasDivider?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding: 10px;
  border-left: ${({ hasDivider }) => (hasDivider ? "1px solid #e5e7eb" : "none")};
`;

const EmailStatusTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const EmailStatusLabel = styled.span`
  font-size: 12px;
  color: #111827;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const EmailStatusValue = styled.div`
  font-size: 14px;
  color: #111827;
  font-weight: bold;
`;

const DeviceTypesRow = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 72px;
`;

const DeviceTypeSection = styled.div<{ hasDivider?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding: 8px 8px;
  border-left: ${({ hasDivider }) => (hasDivider ? "1px solid #e5e7eb" : "none")};
`;

const DeviceTypeTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
`;

const DeviceTypeIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const DeviceTypeName = styled.span`
  font-size: 12px;
  color: #111827;
  font-weight: 500;
`;

const DeviceTypeCount = styled.div`
  font-size: 14px;
  color: #111827;
  font-weight: bold;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

const IconBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #f1f3f9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.div`
  font-size: 18px;
  color: #666;
`;

const ValueRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Value = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Change = styled.span<{ positive?: boolean }>`
  font-size: 16px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ positive }) => (positive ? "#22c55e" : "#ef4444")};
`;

const SubText = styled.div`
  font-size: 14px;
  color: #505050;
  margin-top: 6px;
`;

const Divider = styled.div`
  height: 2px;
  background: #F3F3F3;
  margin: 14px 0;
`;

const BottomStats = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MiniStat = styled.div``;

const MiniLabel = styled.div`
  font-size: 16px;
  margin-bottom:10px;
  color: #3D3D3D;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MiniValue = styled.div`
  font-weight: 600;
  margin-top: 4px;
  font-size: 18px;
  color: #3D3D3D;
`;

export default function DeviceManagementDashboard() {
    return (
        <Wrapper>
            <Header>
                <HeaderLeft>
                    <IconButton>
                        <FiMonitor size={20} />
                    </IconButton>
                    <Title>Device Management Dashboard</Title>
                </HeaderLeft>

                <UpgradePlanGroup>
                    <UpgradeButton>
                        <FiZap size={16} />
                        Upgrade Plan
                    </UpgradeButton>
                    <MdOutlineKeyboardArrowDown fontSize={30} />
                </UpgradePlanGroup>
            </Header>

            <Grid>
                <StatCard
                    title="Number Of Devices"
                    value="3,836"
                    change="15%"
                    positive
                    icon={<FiMonitor />}
                />

                <StatCard
                    title="Users"
                    value="3,836"
                    change="15%"
                    icon={<FiUsers />}
                />

                <StatCard
                    title="Emails"
                    value="316"
                    change="23%"
                    icon={<FiMail />}
                />

                <StatCard
                    title="Number of Apps"
                    value="316"
                    change="23%"
                    icon={<FiDownload />}
                    showBottomStats={false}
                />

                <LargeCardCol1>
                    <DeviceTypesRow>
                        <DeviceTypeSection>
                            <DeviceTypeTop>
                                <DeviceTypeIcon>
                                    <FaWindows size={20} />
                                </DeviceTypeIcon>
                                <DeviceTypeName>Windows</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>1,403 devices</DeviceTypeCount>
                        </DeviceTypeSection>
                        <DeviceTypeSection hasDivider>
                            <DeviceTypeTop>
                                <DeviceTypeIcon>
                                    <FaApple size={20} />
                                </DeviceTypeIcon>
                                <DeviceTypeName>Mac</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>632 devices</DeviceTypeCount>
                        </DeviceTypeSection>
                        <DeviceTypeSection hasDivider>
                            <DeviceTypeTop>
                                <DeviceTypeIcon>
                                    <PiLinuxLogoThin size={20} />
                                </DeviceTypeIcon>
                                <DeviceTypeName>Linux</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>1,801 devices</DeviceTypeCount>
                        </DeviceTypeSection>
                    </DeviceTypesRow>
                </LargeCardCol1>

                <LargeCardCol2>
                    <DeviceTypesRow>
                        <DeviceTypeSection>
                            <DeviceTypeTop>
                                <DeviceTypeIcon>
                                    <FaBuilding size={20} />
                                </DeviceTypeIcon>
                                <DeviceTypeName>Organizations</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>1,403 users</DeviceTypeCount>
                        </DeviceTypeSection>
                        <DeviceTypeSection hasDivider>
                            <DeviceTypeTop>
                                <DeviceTypeIcon>
                                    <FiUsers size={20} />
                                </DeviceTypeIcon>
                                <DeviceTypeName>Departments</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>632 users</DeviceTypeCount>
                        </DeviceTypeSection>
                        <DeviceTypeSection hasDivider>
                            <DeviceTypeTop>
                                <DeviceTypeIcon>
                                    <FiUsers size={20} />
                                </DeviceTypeIcon>
                                <DeviceTypeName>Groups</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>1,801 users</DeviceTypeCount>
                        </DeviceTypeSection>
                    </DeviceTypesRow>
                </LargeCardCol2>

                <LargeCardCol3>
                    <EmailStatusRow>
                        <EmailStatusSection>
                            <EmailStatusTop>
                                <EmailStatusLabel>
                                    <MdMarkEmailRead /> Read
                                </EmailStatusLabel>
                                <EmailStatusValue>1,403 emails</EmailStatusValue>
                            </EmailStatusTop>
                        </EmailStatusSection>
                        <EmailStatusSection hasDivider>
                            <EmailStatusTop>
                                <EmailStatusLabel>
                                    <MdDrafts /> Unread
                                </EmailStatusLabel>
                                <EmailStatusValue>632 emails</EmailStatusValue>
                            </EmailStatusTop>
                        </EmailStatusSection>
                    </EmailStatusRow>
                </LargeCardCol3>
            </Grid>
        </Wrapper>
    );
}

type StatProps = {
    title: string;
    value: string;
    change: string;
    positive?: boolean;
    icon: React.ReactNode;
    showBottomStats?: boolean;
};

function StatCard({ title, value, change, positive, icon, showBottomStats = true }: StatProps) {
    const isPositive = !!positive;

    const areaPath = isPositive
        ? `
          M0,40
          C15,34 25,30 35,26
          C45,22 60,18 70,14
          C80,10 90,8 100,6
          L100,50
          L0,50
          Z
        `
        : `
          M0,10
          C15,12 20,18 30,20
          C40,22 50,18 60,25
          C70,32 80,35 100,45
          L100,50
          L0,50
          Z
        `;

    const linePath = isPositive
        ? `
          M0,40
          C15,34 25,30 35,26
          C45,22 60,18 70,14
          C80,10 90,8 100,6
        `
        : `
          M0,10
          C15,12 20,18 30,20
          C40,22 50,18 60,25
          C70,32 80,35 100,45
        `;

    const gradientId = isPositive ? "statPositiveGradient" : "statNegativeGradient";
    const color = isPositive ? "#22c55e" : "#ef4444";

    return (
        <Card>
            <Group>
                <div>
                    <CardHeader>
                        <IconBox>{icon}</IconBox>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>

                    <ValueRow>
                        <Value>{value}</Value>
                        <Change positive={positive}>
                            <span>{positive ? "↑" : "↓"}</span>
                            <span>{change}</span>
                        </Change>
                    </ValueRow>

                    <SubText>Compared to last week</SubText>
                </div>
                <ChartSvg viewBox="0 0 100 50" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
                            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
                        </linearGradient>
                    </defs>

                    <path d={areaPath} fill={`url(#${gradientId})`} />

                    <path
                        d={linePath}
                        fill="none"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </ChartSvg>
            </Group>

            {showBottomStats && (
                <>
                    <Divider />
                    <BottomStats>
                        <MiniStat>
                            <MiniLabel>
                                <IconButton><GiUnplugged size={16} /></IconButton>
                                Plugged
                            </MiniLabel>
                            <MiniValue>1,923</MiniValue>
                        </MiniStat>

                        <MiniStat>
                            <MiniLabel>
                                <IconButton><GiUnplugged size={16} /></IconButton>
                                Unplugged
                            </MiniLabel>
                            <MiniValue>1,913</MiniValue>
                        </MiniStat>
                    </BottomStats>
                </>
            )}
        </Card>
    );
}