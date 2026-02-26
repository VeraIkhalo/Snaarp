import type { ReactNode } from 'react'
import styled from 'styled-components'

const GridRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

type MetricsGridProps = {
  children: ReactNode;
}

export default function MetricsGrid({ children }: MetricsGridProps) {
  return <GridRoot>{children}</GridRoot>
}

