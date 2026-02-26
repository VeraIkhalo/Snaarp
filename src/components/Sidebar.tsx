import styled from 'styled-components'

type SidebarItem = {
  label: string
  active?: boolean
}

const mainItems: SidebarItem[] = [
  { label: 'Dashboard', active: true },
  { label: 'Organization & Reg.' },
  { label: 'Reporting' },
  { label: 'Billing' },
  { label: 'Account' },
  { label: 'Storage' },
  { label: 'Settings' },
  { label: 'Device Management' },
  { label: 'Productivity Report' }
]

const secondaryItems: SidebarItem[] = [
  { label: 'User Panel' },
  { label: 'Support' }
]

const SidebarRoot = styled.aside`
  margin-right:10px;
  width: 260px;
  padding: 24px 20px;
  background: #ffffff
  border-radius:8px;
  // display: flex;
  // flex-direction: column;
  // gap: 24px;
`

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 4px 4px;
`

const LogoText = styled.span`
  font-weight: 600;
  letter-spacing: 0.03em;
  font-size: 28px;
`

const Section = styled.nav<{ secondary?: boolean }>`

  ${({ secondary }) =>
    secondary &&
    `
    margin-top: 100px;
    border-top: none;
  `}
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0;
`

const Item = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  color: ${({ active }) => (active ? '#546BFF' : '#6b7280')};
  background-color: ${({ active }) => (active ? '#ECF3FF' : 'transparent')};
  font-weight: ${({ active }) => (active ? '600' : '400')};

  &:hover {
    background-color: ${({ active }) =>
      active ? '#ECF3FF' : '#f3f4ff'};
    color: #546BFF;
    font-weight: 600;
  }
`

const ItemIcon = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 2px solid currentColor;
  opacity: 0.7;
`

const ItemLabel = styled.span`
  white-space: nowrap;
`

const UserCard = styled.div`
  border-top: 1px solid #e5e7eb;
  padding: 6px 10px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`

const AvatarWrapper = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
`

const AvatarCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #111827, #4b5563);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
`

const AvatarStatus = styled.span`
`

const UserText = styled.div`
  display: flex;
  flex-direction: column;
`

const UserName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
`

const UserEmail = styled.div`
  font-size: 12px;
  color: #6b7280;
`

export function Sidebar() {
  return (
    <SidebarRoot>
      <SidebarHeader>
        <LogoText>Snaarp</LogoText>
      </SidebarHeader>

      <Section aria-label="Main navigation">
        <List>
          {mainItems.map(item => (
            <Item key={item.label} active={item.active}>
              <ItemIcon />
              <ItemLabel>{item.label}</ItemLabel>
            </Item>
          ))}
        </List>
      </Section>

      <Section secondary aria-label="Secondary navigation">
        <List>
          {secondaryItems.map(item => (
            <Item key={item.label}>
              <ItemIcon />
              <ItemLabel>{item.label}</ItemLabel>
            </Item>
          ))}
        </List>
      </Section>

      <UserCard>
        <AvatarWrapper>
          <AvatarCircle>CS</AvatarCircle>
          <AvatarStatus />
        </AvatarWrapper>
        <UserText>
          <UserName>Chidinma Snaarp</UserName>
          <UserEmail>alm.law50@example.com</UserEmail>
        </UserText>
      </UserCard>
    </SidebarRoot>
  )
}

