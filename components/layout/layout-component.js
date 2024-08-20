import { Layout as ALayout } from "antd"
import React from "react"
import HeaderBar from "./header-component"
import SiderBar from "./sider-component"

const { Content } = ALayout

export const MyLayout = ({ children }) => {
  return (
    <ALayout className="layout">
      <HeaderBar />
      <ALayout>
        <SiderBar />
        <ALayout>
          <Content className="content">
            <div>{children}</div>
          </Content>
        </ALayout>
      </ALayout>
    </ALayout>
  )
}

export default MyLayout
