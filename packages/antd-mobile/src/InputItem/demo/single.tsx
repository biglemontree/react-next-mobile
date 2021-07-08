import * as React from 'react'
import { unstable_InputItem as InputItem } from 'reactui-mobile-mobile'
import { SingleFormDemo } from '../../_internal/demo'

export default () => {
  const events = {
    onChange: (v: string) => console.log('onChange', v),
  }

  return (
    <>
      <SingleFormDemo>
        <InputItem placeholder="请输入" defaultValue="222" />
      </SingleFormDemo>
    </>
  )
}
