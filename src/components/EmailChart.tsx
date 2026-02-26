import React from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 3fr;
  gap: 10px;
  background: #F6F6F6;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px 10px;
`;

const LeftCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  margin-bottom: 30px;
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
  border: 1px solid #F5F5F5;
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
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

const DonutWrapper = styled.div`
  position: relative;
  margin: 6px 0 18px;
`;

const InnerRing = styled.div`
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  width: 138px;
  height: 138px;
  border-radius: 50%;
  border: 6px dashed #72B1FF;
`;

const CenterLabel = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const CenterBig = styled.div`
  font-weight: 700;
  color: #3D3D3D;
  font-size: 14px;
`;

const CenterSmall = styled.div`
  font-weight: 700;
  color: #3D3D3D;
  font-size: 14px;
`;

const Legend = styled.div`
  display: flex;
  gap: 22px;
  margin: 18p 0 15px;

`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #3D3D3D;
`;

const Dot = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  background: ${(p) => p.color};
`;

const TotalText = styled.div`
  text-align: center;

  span {
    display: block;
    font-size: 16px;
    color: #3D3D3D;
    margin:15px 0 0;
    font-weight:700;
  }

  strong {
    font-size: 16px;
    color: #3D3D3D;
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  margin-top: 6px;
`;

const TooltipCard = styled.div`
  background: #ECF3FF;
  border-radius: 8px;
  padding: 10px 0 0;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  min-width: 120px;
`;

const TooltipRow = styled.div`
padding: 2px 12px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
   color: #374151;
  margin-bottom: 2px;

  strong {
    color: #374151;
    font-weight: 400;
  }
`;

const TooltipTotal = styled(TooltipRow)`
 
  padding: 3px 12px;
  border-top: 1px solid #eef2f7;
  border-radius: 0 0 8px 8px;
  display:flex;
  align-items:center;
    background:#5268FF;
  span {
    color: #FFFFFF;
    font-size: 14px;
  }

  strong {
    color: #FFFFFF;
    font-weight: 700;
  }
`;

import {
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    CartesianGrid,
    Area,
    AreaChart,
} from "recharts";

const emailBreakdown = [
    { name: "Sent", value: 5421, color: "#F59E0B" },
    { name: "Received", value: 3210, color: "#6366F1" },
    { name: "Unsent", value: 540, color: "#E5E7EB" },
];

const monthlyData = [
    { name: "JAN", total: 50 },
    { name: "FEB", total: 420 },
    { name: "MARCH", total: 120 },
    { name: "APR", total: 480 },
    { name: "MAY", total: 900 },
    { name: "JUN", total: 1500 },
    { name: "JUL", total: 1747 },
    { name: "AUG", total: 2100 },
    { name: "SEP", total: 2600 },
    { name: "OCT", total: 3000 },
    { name: "NOV", total: 2800 },
    { name: "DEC", total: 2950 },
];


interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
        value?: number;
    }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (!active || !payload || !payload.length || typeof payload[0].value !== "number") return null;

    const total = payload[0].value;

    const sent = Math.round(total * 0.33);
    const received = Math.round(total * 0.53);
    const unsent = total - sent - received;

    return (
        <TooltipCard>
            <TooltipRow>
                <span>Sent</span>
                <strong>{sent.toLocaleString()}</strong>
            </TooltipRow>
            <TooltipRow>
                <span>Received</span>
                <strong>{received.toLocaleString()}</strong>
            </TooltipRow>
            <TooltipRow>
                <span>Unsent</span>
                <strong>{unsent.toLocaleString()}</strong>
            </TooltipRow>
            <TooltipTotal>
                <span>Total</span>
                <strong>{total.toLocaleString()}</strong>
            </TooltipTotal>
        </TooltipCard>
    );
};

const EmailDashboard: React.FC = () => {
    return (
        <Wrapper>
            <LeftCard>
                <CardHeader>
                    <HeaderLeft>
                        <IconBox><MdEmail /></IconBox>
                        <Title>Email Chart</Title>
                    </HeaderLeft>
                </CardHeader>

                <DonutWrapper>
                    <PieChart width={220} height={220}>
                        <defs>
                            <linearGradient id="sentGrad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#FBBF24" />
                                <stop offset="100%" stopColor="#F59E0B" />
                            </linearGradient>
                            <linearGradient id="recvGrad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#818CF8" />
                                <stop offset="100%" stopColor="#6366F1" />
                            </linearGradient>
                        </defs>

                        <Pie
                            data={emailBreakdown}
                            innerRadius={78}
                            outerRadius={98}
                            paddingAngle={2}
                            stroke="none"
                            dataKey="value"
                        >
                            <Cell fill="url(#sentGrad)" />
                            <Cell fill="url(#recvGrad)" />
                            <Cell fill="#E5E7EB" />
                        </Pie>
                    </PieChart>
                    <InnerRing />

                    <CenterLabel>
                        <CenterBig>Emails</CenterBig>
                        <CenterSmall>Chart</CenterSmall>
                    </CenterLabel>
                </DonutWrapper>

                <Legend>
                    {emailBreakdown.map((item) => (
                        <LegendItem key={item.name}>
                            <Dot color={item.color} />
                            {item.name}
                        </LegendItem>
                    ))}
                </Legend>

                <TotalText>
                    <span>TOTAL EMAILS SENT</span>
                    <strong>5,421</strong>
                </TotalText>
            </LeftCard>

            <RightCard>
                <CardHeader>
                    <HeaderLeft>
                        <IconBox><MdEmail /></IconBox>
                        <Title>Total Email</Title>
                    </HeaderLeft>

                    <HeaderRight>
                        <IconBoxTwo><VscGraph /></IconBoxTwo>
                        <IconBoxThree><BsGraphUp /></IconBoxThree>
                        <MonthSelect>
                            Month <MdOutlineKeyboardArrowDown fontSize={30} />
                        </MonthSelect>
                    </HeaderRight>
                </CardHeader>

                <ChartWrapper>
                    <ResponsiveContainer width="100%" height={320}>
                        <AreaChart data={monthlyData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6366F1" stopOpacity={0.28} />
                                    <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <CartesianGrid
                                strokeDasharray="4 6"
                                vertical={false}
                                stroke="#E5E7EB"
                            />

                            <XAxis
                                dataKey="name"
                                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                                axisLine={false}
                                tickLine={false}
                            />

                            <YAxis
                                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                                axisLine={false}
                                tickLine={false}
                                domain={[0, 7000]}
                                ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000]}
                            />

                            <Tooltip
                                content={<CustomTooltip />}
                                cursor={{ stroke: "#C7D2FE", strokeDasharray: "4 4" }}
                            />

                            <Area
                                type="monotone"
                                dataKey="total"
                                stroke="#4F46E5"
                                strokeWidth={3}
                                fill="url(#colorTotal)"
                                dot={{ r: 0 }}
                                activeDot={{ r: 5, strokeWidth: 2 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartWrapper>
            </RightCard>
        </Wrapper>
    );
};

export default EmailDashboard;


