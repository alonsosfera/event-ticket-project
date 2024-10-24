import { Button , Typography } from "antd"

const InvitationDesign = ({ setShowNewDesign }) => {
  const handleBackToList = () => {
    setShowNewDesign(false)
  }

  return (
    <div>
      <Typography.Title level={5}>Modal nuevo diseño</Typography.Title>
      <Button type="default" onClick={handleBackToList}>
        Volver a la lista
      </Button>
    </div>
  )
}

export default InvitationDesign
