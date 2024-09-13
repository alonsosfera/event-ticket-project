import { HomeOutlined , ScheduleOutlined , ShopOutlined, UserOutlined, PlusOutlined } from "@ant-design/icons"
import Link from "next/link"

export const menuItems = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <Link href="/">Inicio</Link>
  },
  {
    key: "/events",
    icon: <ScheduleOutlined />,
    label: <Link href="/events">Eventos</Link>
  },
  {
    key: "/rooms",
    icon: <ShopOutlined />,
    label: <Link href="/rooms">Salones</Link>
  },
  {
    key: "/room-maps",
    icon: <PlusOutlined />,
    label: <Link href="/room-maps">Acomodo de mesas</Link>
  },
  {
    key: "/users",
    icon: <UserOutlined />,
    label: <Link href="/users">Usuarios</Link>
  }
]
