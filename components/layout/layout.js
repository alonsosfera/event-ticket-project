import { Layout as ALayout, Menu, Typography, Dropdown, Button } from "antd"
import {
  UserOutlined,
  HomeOutlined,
  ScheduleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined
} from "@ant-design/icons"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const { Header, Sider, Content } = ALayout
const { Title } = Typography

export const MyLayout = ({ children }) => {
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
    <ALayout className="layout">
      <Header className="header">
        <div className="mobile-menu-button">
          <Dropdown overlay={menuItems} trigger={["click"]}>
            <Button icon={<MenuOutlined className="menu-icon" />} type="text" />
          </Dropdown>
        </div>
        <Link href="/">
          <Image
            src="/PartyPass logo no background.webp"
            alt="logo"
            width={150}
            height={45}
            className="image"
            priority />
        </Link>
        <div className="user">
          <UserOutlined className="icon" />
          <Title className="text" level={4}> User rol </Title>
        </div>
      </Header>
      <ALayout>
        <Sider
          className={"sider"}
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
        <ALayout>
          <Content className={`content ${collapsed ? "content-collapsed" : ""}`}>
            <div>
              {children}
            </div>
          </Content>
        </ALayout>
      </ALayout>
    </ALayout>
  )
}