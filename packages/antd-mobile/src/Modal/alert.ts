import standard from './standard'
import { AlertOptions } from './PropsType'
import { promisify } from '../_internal'

const alert = (options: AlertOptions, cb: () => void) => {
  const { buttonText, ...rest } = options
  return standard({
    ...rest,
    mainButton: {
      text: buttonText ?? 'ζη₯ιδΊ',
      onPress() {
        cb?.()
      },
    },
    closeType: 'none',
  })
}

export default promisify(alert)
