import * as React from 'react'
import {
  unstable_Modal as Modal,
  unstable_Button as Button,
} from 'reactUI-mobile'

export default () => {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <Modal type="promo" visible={show} onClose={() => setShow(false)}>
        内容内容
      </Modal>

      <Button
        onPress={() => {
          setShow(true)
        }}
      >
        营销
      </Button>
    </>
  )
}
