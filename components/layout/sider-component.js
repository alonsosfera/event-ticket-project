import { Layout as ALayout, Menu } from "antd"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import React, { useState } from "react"
import { useRouter } from "next/router"
import { menuItems } from "./items-header-sider-component"
const { Sider } = ALayout

const SiderBar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const currentPath = router.pathname

  const toggleSider = () => {
    setCollapsed(!collapsed)
  }

  const menuSideBar = (
    <Menu theme="light" selectedKeys={[currentPath]}>
      {menuItems.map(item => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Sider
      className="sider"
      theme="light"
      collapsed={collapsed}
      onCollapse={setCollapsed}
      collapsedWidth={70}>
      {menuSideBar}
      <div className="sider-footer">
        {collapsed ? (
          <MenuUnfoldOutlined className="menu-toggle" onClick={toggleSider} />
        ) : (
          <MenuFoldOutlined className="menu-toggle" onClick={toggleSider} />
        )}
      </div>
    </Sider>
  )
}

export default SiderBar
