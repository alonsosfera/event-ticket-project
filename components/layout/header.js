import { Layout as ALayout, Menu, Typography, Dropdown, Button } from "antd"
import { UserOutlined, MenuOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

const { Header } = ALayout
const { Title } = Typography

const HeaderBar = () => {
  const router = useRouter()
  const currentPath = router.pathname

  const menuItems = (
    <Menu theme="light" selectedKeys={[currentPath]}>
      <Menu.Item key="/" icon={<UserOutlined />}>
        <Link href="/">Inicio</Link>
      </Menu.Item>
      <Menu.Item key="/events" icon={<UserOutlined />}>
        <Link href="/events">Eventos</Link>
      </Menu.Item>
    </Menu>
  )

  return (
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
        <Title className="text" level={4}>User rol</Title>
      </div>
    </Header>
  )
}

export default HeaderBar
