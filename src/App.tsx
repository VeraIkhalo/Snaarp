import styled from 'styled-components'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { CloudNetworkPanel } from './components/CloudNetworkPanel'
import { FileSharingActiveUsersPanel } from './components/FileSharingActiveUsersPanel'
import { CloudNetwork } from './components/CloudNetwork'

const AppShell = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f6f6f6;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  color: #111827;
`

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

function App() {
  return (
    <AppShell>
      <Sidebar />
      <AppContent>
        <Header />
        <CloudNetwork />
        <CloudNetworkPanel />
        <FileSharingActiveUsersPanel />
      </AppContent>
    </AppShell>
  )
}

export default App
