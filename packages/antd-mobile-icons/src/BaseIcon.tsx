import * as React from 'react'
import classnames from 'classnames'
import Touchable from 'reactui-mobile-touchable'
import { IconPropsType } from './PropsType'

import 'reactui-mobile-styles/lib/Icon'

const prefixCls = 'amd-icon'

const Icon: React.FC<IconPropsType & {
  type: string
}> = props => {
  const { type, className, size, color, onPress } = props

  const cls = classnames(
    className,
    prefixCls,
    `${prefixCls}-${type}`,
    `${prefixCls}-${size}`,
  )
  return (
    <Touchable onPress={onPress}>
      <svg className={cls} color={color}>
        <use xlinkHref={`#${type}`} />
      </svg>
    </Touchable>
  )
}

Icon.displayName = 'BaseIcon'
Icon.defaultProps = {
  size: 'md',
}

export default Icon
