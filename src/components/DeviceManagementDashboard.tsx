import styled from "styled-components";
import { FiMonitor, FiUsers, FiMail, FiDownload } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import { GiUnplugged } from "react-icons/gi";

const Wrapper = styled.div`
  background: #F6F6F6;
  min-height: 100vh;
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
  padding: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const LargeCard = styled(Card)`
  grid-column: span 1;
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

const LargeValue = styled(Value)`
  margin-top: 8px;
`;

const Change = styled.span<{ positive?: boolean }>`
  font-size: 16px;
  font-weight: 600;
  
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
                    change="↑15%"
                    positive
                    icon={<FiMonitor />}
                />

                <StatCard
                    title="Users"
                    value="3,836"
                    change="↓15%"
                    icon={<FiUsers />}
                />

                <StatCard
                    title="Emails"
                    value="316"
                    change="-23%"
                    icon={<FiMail />}
                />

                <StatCard
                    title="Number of Apps"
                    value="316"
                    change="-23%"
                    icon={<FiDownload />}
                />

                <LargeCard>
                    <CardTitle>Number of Downloads</CardTitle>
                    <LargeValue>316</LargeValue>
                    <Change positive>23%</Change>
                    <SubText>Compared to last week</SubText>
                </LargeCard>
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
};

function StatCard({ title, value, change, positive, icon }: StatProps) {
    return (
        <Card>
            <CardHeader>
                <IconBox>{icon}</IconBox>
                <CardTitle>{title}</CardTitle>
            </CardHeader>

            <ValueRow>
                <Value>{value}</Value>
                <Change positive={positive}>{change}</Change>
            </ValueRow>

            <SubText>Compared to last week</SubText>

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
        </Card>
    );
}