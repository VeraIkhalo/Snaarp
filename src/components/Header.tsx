import styled from 'styled-components'

const HeaderRoot = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 10px 24px;
  background: #ffffff;
  gap: 24px;
  margin-bottom:10px;
`

const HeaderSearch = styled.div`
  flex: 1;
  max-width: 50%;
  position: relative;
  display: flex;
  align-items: center;
`

const SearchIcon = styled.svg`
  position: absolute;
  left: 12px;
  color: #9ca3af;
  pointer-events: none;
`

const SearchInput = styled.input`
  width: 90%;
  padding: 10px 12px 10px 36px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  color: #111827;
  background: #ffffff;
  transition: border-color 0.15s ease;

  &:focus {
    outline: none;
    border-color: #111827;
  }

  &::placeholder {
    color: #9ca3af;
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: #F6F6F6;
  color: #6b7280;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
`

const AgentGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
   background: #F6F6F6;
  border-radius: 8px;
  padding: 4px 8px;
  height: 40px;
`

const AgentCode = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #111827;
`

const AgentLabel = styled.span`
  color: #6b7280;
  font-weight: 500;
`

const AgentValue = styled.span`
  color: #3395FF;
  font-weight: 600;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  letter-spacing: 0.02em;
`

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: #6b7280;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background: #f3f4f6;
    color: #111827;
  }
`

export function Header() {
  const handleCopyAgentCode = () => {
    navigator.clipboard.writeText('0365o2j37742y3b38')
    // You could add a toast notification here if needed
  }

  return (
    <HeaderRoot>
      <HeaderSearch>
        <SearchIcon
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search for users, groups or settings"
        />
      </HeaderSearch>

      <HeaderRight>
        <IconButton aria-label="Notifications">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2.5a6.5 6.5 0 0 0-6.5 6.5c0 3.5-1.5 5-1.5 5h16s-1.5-1.5-1.5-5A6.5 6.5 0 0 0 10 2.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 17.5a2.5 2.5 0 0 0 5 0"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>

        <AgentGroup>
        <AgentCode>
          <AgentLabel>Agent Code:</AgentLabel>
          <AgentValue>0365o2j37742y3b38</AgentValue>
        </AgentCode>

        <CopyButton onClick={handleCopyAgentCode} aria-label="Copy agent code">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.333 2.667h8a1.333 1.333 0 0 1 1.334 1.333v8a1.333 1.333 0 0 1-1.334 1.333h-8a1.333 1.333 0 0 1-1.333-1.333V4a1.333 1.333 0 0 1 1.333-1.333Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.667 5.333h8a1.333 1.333 0 0 1 1.333 1.334v8a1.333 1.333 0 0 1-1.333 1.333h-8a1.333 1.333 0 0 1-1.334-1.333v-8a1.333 1.333 0 0 1 1.334-1.334Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CopyButton>
        </AgentGroup>
      </HeaderRight>
    </HeaderRoot>
  )
}

