import { DragOutlined , HomeOutlined , ScheduleOutlined , ShopOutlined } from "@ant-design/icons"
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
    icon: <DragOutlined />,
    label: <Link href="/room-maps">Acomodo de Mesas</Link>
  }
]
