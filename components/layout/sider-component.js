import { Layout as ALayout, Menu } from "antd"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import React from "react"
import { useRouter } from "next/router"
import { menuItems } from "./menu-items"
import { useSession } from "next-auth/react"

const { Sider } = ALayout

const SiderBar = ({ collapseSider, toggleCollapsedSider }) => {

  const router = useRouter()
  const currentPath = router.pathname
  const { data: session } = useSession()

  const userRole = session?.user?.role

  const filteredMenuItems = menuItems.filter(item => {
    if (userRole === "ADMIN") return true
    if (userRole === "HOST") return item.key === "/" || item.key === "/events"
  })

  const menuSideBar = (
    <Menu theme="light" selectedKeys={[currentPath]}>
      {filteredMenuItems.map(item => (
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
      collapsed={collapseSider}
      onCollapse={toggleCollapsedSider}
      collapsedWidth={70}>
      {menuSideBar}
      <div className="sider-footer">
        {collapseSider ? (
          <MenuUnfoldOutlined className="menu-toggle" onClick={toggleCollapsedSider} />
        ) : (
          <MenuFoldOutlined className="menu-toggle" onClick={toggleCollapsedSider} />
        )}
      </div>
    </Sider>
  )
}

export default SiderBar
