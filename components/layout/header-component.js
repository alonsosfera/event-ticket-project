import { Layout as ALayout, Typography, Dropdown, Button } from "antd"
import { MenuOutlined, UserOutlined  } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { menuItems } from "./menu-items"

const { Header } = ALayout
const { Title } = Typography

const HeaderBar = () => {

  return (
    <Header className="header">
      <div className="mobile-menu-button">
        <Dropdown
          trigger={["click"]}
          menu={{ items: menuItems }}>
          <Button icon={<MenuOutlined className="menu-icon" />} type="text" />
        </Dropdown>
      </div>
      <Link href="/">
        <Image
          src="/logo_no_background.webp"
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