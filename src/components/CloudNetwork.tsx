import styled from 'styled-components'
import { SiFurrynetwork } from "react-icons/si";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CloudNetworkRoot = styled.div`
  border-radius: 8px;
  padding: 10px 24px;
  background: #ffffff;
  gap: 24px;
  margin-bottom:10px;
`
const CloudNetworkHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CloudNetworkHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const CloudNetworkTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0;
`

const CloudNetworkHeaderRight = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  color: #6b7280;
  background: transparent;
  border:none;
  font-size: 24px;
  cursor: pointer;
`

export function CloudNetwork() {
  return (
    <CloudNetworkRoot>
      <CloudNetworkHeader>
        <CloudNetworkHeaderLeft>
          <IconButton aria-label="Notifications">
            <SiFurrynetwork size={20} />
          </IconButton>
          <CloudNetworkTitle>Cloud Network</CloudNetworkTitle>
        </CloudNetworkHeaderLeft>
        <CloudNetworkHeaderRight type="button">
          <MdOutlineKeyboardArrowDown />
        </CloudNetworkHeaderRight>
      </CloudNetworkHeader>
    </CloudNetworkRoot>
  )
}

