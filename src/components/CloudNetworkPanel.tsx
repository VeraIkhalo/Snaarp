import styled from 'styled-components'
import type { ReactNode } from 'react'
import { LuUser } from "react-icons/lu";
import { MdGroups } from "react-icons/md";
import { MdUpload } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { GrStorage } from "react-icons/gr";

import StorageImg from '../assets/storage-img.png'
import { FiZap } from "react-icons/fi";
import MetricsGrid from './MetricsGrid'

const Panel = styled.section`
  background:#F6F6F6;
  border-radius: 8px;
  margin-bottom:10px;
`

const PanelBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`


type MetricCardProps = {
  title: string
  value: string
  change: string
  positive: boolean
  points: number[]
}

const StorageIcon = styled.div`
  display: flex;
  align-items: center;
  color: #6b7280;
  gap: 8px;
  margin-bottom: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`

const StorageTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #111827;
  margin: 0;
`

const IconButton = styled.button`
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
  transition: background-color 0.15s ease, color 0.15s ease;
`

const MetricCard = styled.article`
  background: #ffffff;
  border-radius: 8px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const MetricTitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
const MetricTitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
   margin-bottom: -20px;
`

const MetricLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #4A4A4A;
`

const MetricIcon = styled.div`
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
  transition: background-color 0.15s ease, color 0.15s ease;
`

const MetricMainRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
`

const MetricValue = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 8px 0;
`

const MetricNumber = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #111827;
`

const MetricChange = styled.span<{ positive: boolean }>`
  font-size: 15px;
  font-weight: 600;
  color: ${({ positive }) => (positive ? '#10b981' : '#ef4444')};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`

const MetricFooter = styled.span`
  font-size: 13px;
  color: #4A4A4A;
`

const ChartSvg = styled.svg`
  width: 150px;
  height: 100px;
  margin-bottom: -25px;
`

const MiniChart = ({ positive }: { positive: boolean }) => {
  if (positive) {
    return (
      <ChartSvg viewBox="0 0 100 50" preserveAspectRatio="none">
        <defs>
          <linearGradient id="positiveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* area fill */}
        <path
          d="
            M0,40
            C15,34 25,30 35,26
            C45,22 60,18 70,14
            C80,10 90,8 100,6
            L100,50
            L0,50
            Z
          "
          fill="url(#positiveGradient)"
        />

        {/* line */}
        <path
          d="
            M0,40
            C15,34 25,30 35,26
            C45,22 60,18 70,14
            C80,10 90,8 100,6
          "
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </ChartSvg>
    )
  }

  return (
    <ChartSvg viewBox="0 0 100 50" preserveAspectRatio="none">
      <defs>
        <linearGradient id="emailGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <path
        d="
          M0,10
          C15,12 20,18 30,20
          C40,22 50,18 60,25
          C70,32 80,35 100,45
          L100,50
          L0,50
          Z
        "
        fill="url(#emailGradient)"
      />

      <path
        d="
          M0,10
          C15,12 20,18 30,20
          C40,22 50,18 60,25
          C70,32 80,35 100,45
        "
        fill="none"
        stroke="#ef4444"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </ChartSvg>
  )
}

function MetricCardView({
  title,
  value,
  change,
  positive,
  icon
}: MetricCardProps & { icon?: ReactNode }) {
  return (
    <MetricCard>
      <MetricTitleRow>
        <MetricTitleLeft>
          {icon && <MetricIcon aria-hidden="true">{icon}</MetricIcon>}
          <MetricLabel>{title}</MetricLabel>
        </MetricTitleLeft>
      </MetricTitleRow>

      <MetricMainRow>
        <MetricValue>
          <MetricNumber>{value}</MetricNumber>
          <MetricChange positive={positive}>
            {positive ? '↑' : '↓'} {change}
          </MetricChange>
        </MetricValue>
        <MiniChart positive={positive} />
      </MetricMainRow>

      <MetricFooter>Compared to last week</MetricFooter>
    </MetricCard>
  )
}


const StorageColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color:#FFFFFF;
  border-radius:8px;
  padding: 8px 30px 8px 8px;
`

const StorageCard = styled.div`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 16px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ChartWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`

const StorageInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const NoteAlert = styled.div`
  border-left: 5px solid #FFBB01;
  border-right: 5px solid #FFBB01;
  border-radius: 10px;
  padding: 12px 14px 12px;
  background: #FFFFFF;
  margin-bottom:10px;
  box-shadow:
    0 -4px 8px rgba(15, 23, 42, 0.06),
    0  4px 8px rgba(15, 23, 42, 0.06);
`

const NoteHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const NoteIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background: #FFBB01;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 13px;
`

const NoteTitle = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #BD74E0;
`

const NoteText = styled.p`
  font-size: 14px;
  color: #535353;
  margin: 0 0 2px;
  padding-left:30px;
`

const NoteDescription = styled.p`
  font-size: 14px;
  color: #535353;
  margin: 0;
  padding-left:30px;
`

const Legend = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #535353;
`

const LegendDot = styled.span<{ color: string }>`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  background-color: ${({ color }) => color};
`

const UpgradeButton = styled.button`
  margin-left: auto;
  margin-top: 4px;
  padding: 9px 16px;
  border-radius: 8px;
  border: 1px solid #5268FF;
  background: #FFFFFF;
  color:#5268FF;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`


export function CloudNetworkPanel() {
  const metrics: (MetricCardProps & { icon: ReactNode })[] = [
    {
      title: 'Users',
      value: '3,836',
      change: '15%',
      positive: false,
      points: [80, 78, 76, 70, 68, 65],
      icon: (
        <LuUser />
      )
    },
    {
      title: 'Groups',
      value: '316',
      change: '23%',
      positive: true,
      points: [30, 34, 38, 40, 44, 48],
      icon: (
        <MdGroups />
      )
    },
    {
      title: 'Uploads',
      value: '316',
      change: '23%',
      positive: true,
      points: [20, 24, 30, 32, 36, 40],
      icon: (
        <MdUpload />
      )
    },
    {
      title: 'Departments',
      value: '316',
      change: '23%',
      positive: false,
      points: [50, 48, 44, 40, 36, 32],
      icon: (
        <FcDepartment />
      )
    }
  ]

  const storageData = [
    { label: 'Files', color: '#9333ea', percentage: 15 },
    { label: 'Folders', color: '#f97316', percentage: 12 },
    { label: 'Videos', color: '#10b981', percentage: 18 },
    { label: 'Apps', color: '#3b82f6', percentage: 10 },
    { label: 'Audios', color: '#ef4444', percentage: 12 },
    { label: 'Miscellaneous', color: '#1e40af', percentage: 13 },
    { label: 'Available Space', color: '#e5e7eb', percentage: 20 }
  ]

  return (
    <Panel aria-label="Cloud network overview">
      <PanelBody>
        <MetricsGrid>
          {metrics.map(metric => (
            <MetricCardView key={metric.title} {...metric} icon={metric.icon} />
          ))}
        </MetricsGrid>

        <StorageColumn>
          <StorageCard>

            <ChartContainer>
              <ChartWrapper>
                <StorageIcon>
                  <IconButton>
                    <GrStorage />
                  </IconButton>
                  <StorageTitle>Storage</StorageTitle>
                </StorageIcon>
                <img src={StorageImg} alt="Storage" />
              </ChartWrapper>
            </ChartContainer>

            <StorageInfo>
              <NoteAlert>
                <NoteHeader>
                  <NoteIcon>!</NoteIcon>
                  <NoteTitle>Note</NoteTitle>
                </NoteHeader>
                <NoteText>You've almost reached your limit</NoteText>
                <NoteDescription>
                  You have used 80% of your available storage. Upgrade plan to
                  access more space.
                </NoteDescription>
              </NoteAlert>

              <Legend>
                {storageData.map(item => (
                  <LegendItem key={item.label}>
                    <LegendDot color={item.color} />
                    <span>{item.label}</span>
                  </LegendItem>
                ))}
              </Legend>
            </StorageInfo>

          </StorageCard>
          <UpgradeButton type="button">
            <FiZap />
            Upgrade Plan
          </UpgradeButton>
        </StorageColumn>
      </PanelBody>
    </Panel>
  )
}