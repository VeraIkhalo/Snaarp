import styled from "styled-components";
import { FiMonitor, FiUsers, FiMail, FiDownload, FiZap, FiActivity, FiPower, FiSend, FiInbox } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown, MdMarkEmailRead, MdDrafts } from "react-icons/md";
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
  grid-template-rows: 1fr 1fr;
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

const TallCard = styled(Card)`
  grid-row: 1 / span 2;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

const StackedCol = styled.div`
  grid-row: 1 / span 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 0;

  & > div {
    flex: 1;
    min-height: 0;
  }
`;

const Group = styled.div`
 display:flex;
 align-items:flex-end;
 justify-content:space-between;
`;

const GroupReader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

const ChartSvg = styled.svg`
  width: 150px;
  height: 100px;
`


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
                <TallCard>
                    <StatBlock
                        title="Number Of Devices"
                        value="3,836"
                        change="15%"
                        positive
                        icon={<FiMonitor />}
                    />
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
                    <Divider />
                    <DeviceTypesRow>
                        <DeviceTypeSection>
                            <DeviceTypeTop>
                                <DeviceTypeIcon><FaWindows size={20} /></DeviceTypeIcon>
                                <DeviceTypeName>Windows</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>1,403 devices</DeviceTypeCount>
                        </DeviceTypeSection>
                        <DeviceTypeSection hasDivider>
                            <DeviceTypeTop>
                                <DeviceTypeIcon><FaApple size={20} /></DeviceTypeIcon>
                                <DeviceTypeName>Mac</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>632 devices</DeviceTypeCount>
                        </DeviceTypeSection>
                        <DeviceTypeSection hasDivider>
                            <DeviceTypeTop>
                                <DeviceTypeIcon><PiLinuxLogoThin size={20} /></DeviceTypeIcon>
                                <DeviceTypeName>Linux</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>1,801 devices</DeviceTypeCount>
                        </DeviceTypeSection>
                    </DeviceTypesRow>
                </TallCard>

                <TallCard>
                    <StatBlock
                        title="Users"
                        value="3,836"
                        change="15%"
                        icon={<FiUsers />}
                    />
                    <Divider />
                    <BottomStats>
                        <MiniStat>
                            <MiniLabel>
                                <IconButton style={{ color: "#22c55e" }}><FiActivity size={16} /></IconButton>
                                Active
                            </MiniLabel>
                            <MiniValue>592</MiniValue>
                        </MiniStat>
                        <MiniStat>
                            <MiniLabel>
                                <IconButton style={{ color: "#ef4444" }}><FiPower size={16} /></IconButton>
                                Offline
                            </MiniLabel>
                            <MiniValue>3,836</MiniValue>
                        </MiniStat>
                    </BottomStats>
                    <Divider />
                    <DeviceTypesRow>
                        <DeviceTypeSection>
                            <DeviceTypeTop>
                                <DeviceTypeIcon><FaBuilding size={20} /></DeviceTypeIcon>
                                <DeviceTypeName>Organizations</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>1,403 users</DeviceTypeCount>
                        </DeviceTypeSection>
                        <DeviceTypeSection hasDivider>
                            <DeviceTypeTop>
                                <DeviceTypeIcon><FiUsers size={20} /></DeviceTypeIcon>
                                <DeviceTypeName>Departments</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>632 users</DeviceTypeCount>
                        </DeviceTypeSection>
                        <DeviceTypeSection hasDivider>
                            <DeviceTypeTop>
                                <DeviceTypeIcon><FiUsers size={20} /></DeviceTypeIcon>
                                <DeviceTypeName>Groups</DeviceTypeName>
                            </DeviceTypeTop>
                            <DeviceTypeCount>1,801 users</DeviceTypeCount>
                        </DeviceTypeSection>
                    </DeviceTypesRow>
                </TallCard>

                <TallCard>
                    <StatBlock
                        title="Emails"
                        value="316"
                        change="23%"
                        icon={<FiMail />}
                    />
                    <Divider />
                    <BottomStats>
                        <MiniStat>
                            <MiniLabel>
                                <IconButton><FiSend size={16} /></IconButton>
                                Sent
                            </MiniLabel>
                            <MiniValue>592</MiniValue>
                        </MiniStat>
                        <MiniStat>
                            <MiniLabel>
                                <IconButton><FiInbox size={16} /></IconButton>
                                Received
                            </MiniLabel>
                            <MiniValue>3,836</MiniValue>
                        </MiniStat>
                    </BottomStats>
                    <Divider />
                    <EmailStatusRow>
                        <EmailStatusSection>
                            <EmailStatusTop>
                                <EmailStatusLabel><MdMarkEmailRead /> Read</EmailStatusLabel>
                                <EmailStatusValue>1,403 emails</EmailStatusValue>
                            </EmailStatusTop>
                        </EmailStatusSection>
                        <EmailStatusSection hasDivider>
                            <EmailStatusTop>
                                <EmailStatusLabel><MdDrafts /> Unread</EmailStatusLabel>
                                <EmailStatusValue>632 emails</EmailStatusValue>
                            </EmailStatusTop>
                        </EmailStatusSection>
                    </EmailStatusRow>
                </TallCard>

                <StackedCol>
                    <StatCard
                        title="Number of Apps"
                        value="316"
                        change="23%"
                        icon={<FiDownload />}
                        showBottomStats={false}
                    />
                    <StatCard
                        title="Number of Downloads"
                        value="316"
                        change="23%"
                        positive
                        icon={<FiDownload />}
                        showBottomStats={false}
                    />
                </StackedCol>
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

const chartPaths = {
  areaPositive: `M0,40 C15,34 25,30 35,26 C45,22 60,18 70,14 C80,10 90,8 100,6 L100,50 L0,50 Z`,
  areaNegative: `M0,10 C15,12 20,18 30,20 C40,22 50,18 60,25 C70,32 80,35 100,45 L100,50 L0,50 Z`,
  linePositive: `M0,40 C15,34 25,30 35,26 C45,22 60,18 70,14 C80,10 90,8 100,6`,
  lineNegative: `M0,10 C15,12 20,18 30,20 C40,22 50,18 60,25 C70,32 80,35 100,45`,
};

function StatBlock({ title, value, change, positive, icon }: Omit<StatProps, "showBottomStats">) {
  const isPositive = !!positive;
  const slug = title.replace(/\s/g, "");
  const gradientId = (isPositive ? "statPos" : "statNeg") + slug;
  const color = isPositive ? "#22c55e" : "#ef4444";
  const areaPath = isPositive ? chartPaths.areaPositive : chartPaths.areaNegative;
  const linePath = isPositive ? chartPaths.linePositive : chartPaths.lineNegative;

  return (
    <Group>
      <GroupReader>
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
      </GroupReader>
      <ChartSvg viewBox="0 0 100 50" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${gradientId})`} />
        <path d={linePath} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </ChartSvg>
    </Group>
  );
}

function StatCard({ title, value, change, positive, icon, showBottomStats = true }: StatProps) {
  return (
    <Card>
      <StatBlock title={title} value={value} change={change} positive={positive} icon={icon} />
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