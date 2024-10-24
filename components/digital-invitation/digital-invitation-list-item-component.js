import { Card, Image } from "antd"

const DigitalInvitationListItem = ({ item, onClick = false }) => {

  return (
    <Card
      onClick={onClick}
      hoverable={!!onClick}
      cover={
        <div style={{ position: "relative" }}>
          <Image
            alt="example"
            preview={false}
            placeholder={true}
            src={item.fileUrl} />
        </div>
      }>
      {item.fileName}
    </Card>
  )
}

export default DigitalInvitationListItem