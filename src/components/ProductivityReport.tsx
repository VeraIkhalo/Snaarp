import styled from "styled-components";
import { FiMonitor, FiClock, FiCalendar, FiUsers, FiGlobe, FiZap } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Wrapper = styled.div`
  background: #F6F6F6;
  margin-bottom: 10px;
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
  border-radius: 10px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
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

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

const IconBox = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #F6F6F6;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #111827;
`;

const ValueRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Value = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

const ValueUnit = styled.span`
  color: #D6D6D6;
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
  font-size: 13px;
  color: #9ca3af;
  margin-top: 4px;
`;

export default function ProductivityReport() {
  return (
    <Wrapper>
      <Header>
        <HeaderLeft>
          <IconButton>
            <FiMonitor size={20} />
          </IconButton>
          <Title>Productivity Report</Title>
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
          title="Hours Productivity"
          value="576"
          unit="Hrs"
          change="15%"
          icon={<FiClock />}
        />

        <StatCard
          title="Days Activity"
          value="267"
          unit="Days"
          change="15%"
          positive
          icon={<FiCalendar />}
        />

        <StatCard
          title="Users"
          value="3,836"
          change="15%"
          icon={<FiUsers />}
        />

        <StatCard
          title="Web Activity"
          value="178"
          unit="Activities"
          change="15%"
          positive
          icon={<FiGlobe />}
        />
      </Grid>
    </Wrapper>
  );
}

type StatProps = {
  title: string;
  value: string;
  unit?: string;
  change: string;
  positive?: boolean;
  icon: React.ReactNode;
};

const chartPaths = {
  areaPositive: "M0,40 C15,34 25,30 35,26 C45,22 60,18 70,14 C80,10 90,8 100,6 L100,50 L0,50 Z",
  areaNegative: "M0,10 C15,12 20,18 30,20 C40,22 50,18 60,25 C70,32 80,35 100,45 L100,50 L0,50 Z",
  linePositive: "M0,40 C15,34 25,30 35,26 C45,22 60,18 70,14 C80,10 90,8 100,6",
  lineNegative: "M0,10 C15,12 20,18 30,20 C40,22 50,18 60,25 C70,32 80,35 100,45",
};

function StatCard({ title, value, unit, change, positive, icon }: StatProps) {
  const isPositive = !!positive;
  const slug = title.replace(/\s/g, "");
  const gradientId = (isPositive ? "prodPos" : "prodNeg") + slug;
  const color = isPositive ? "#22c55e" : "#ef4444";
  const areaPath = isPositive ? chartPaths.areaPositive : chartPaths.areaNegative;
  const linePath = isPositive ? chartPaths.linePositive : chartPaths.lineNegative;

  return (
    <Card>
      <Group>
        <div>
          <CardHeader>
            <IconBox>{icon}</IconBox>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <ValueRow>
            <Value>{value}{unit ? <> <ValueUnit>{unit}</ValueUnit></> : null}</Value>
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
          <path d={linePath} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </ChartSvg>
      </Group>
    </Card>
  );
}