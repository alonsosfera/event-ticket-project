import { HomeOutlined , ScheduleOutlined , ShopOutlined } from "@ant-design/icons"
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
  }
]
