import * as React from 'react'
import { unstable_NumericInput as NumericInput } from 'react-mobile'
import { SingleFormDemo } from '../../_internal/demo'
const App = () => {
  return (
    <>
      <SingleFormDemo>
        <NumericInput confirm defaultValue="123"></NumericInput>
      </SingleFormDemo>
    </>
  )
}

export default App
