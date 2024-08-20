import { Layout as ALayout, Menu } from "antd"
import {
  HomeOutlined,
  ScheduleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons"
import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const { Sider } = ALayout

const SiderBar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const currentPath = router.pathname

  const toggleSider = () => {
    setCollapsed(!collapsed)
  }

  const menuItems = (
    <Menu theme="light" selectedKeys={[currentPath]}>
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <Link href="/">Inicio</Link>
      </Menu.Item>
      <Menu.Item key="/events" icon={<ScheduleOutlined />}>
        <Link href="/events">Eventos</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <Sider
      className="sider"
      theme="light"
      collapsed={collapsed}
      onCollapse={setCollapsed}
      collapsedWidth={70}>
      {menuItems}
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
