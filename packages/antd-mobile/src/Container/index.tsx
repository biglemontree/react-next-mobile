import * as React from 'react'
import classNames from 'classnames'
import { withError, Touchable } from '../rmc'
import { useTracker } from '../hooks'
import { ContainerPropsType } from './PropsType'
import { RightOutline, CloseOutline, MoreOutline } from 'reactui-mobile-icons'

import 'reactui-mobile-styles/lib/Container'

export const Container: React.FC<ContainerPropsType> = props => {
  useTracker(Container.displayName)

  const { thumb, title, icon, children, className } = props

  const wrapCls = 'amd-container'

  const cls = classNames({
    [`${wrapCls}`]: true,
    [`${className}`]: !!className,
  })

  let thumbNode = null

  if (thumb) {
    thumbNode = typeof thumb === 'string' ? <img src={thumb} /> : thumb
  }

  const Icons = {
    arrow: <RightOutline size="xs" />,
    close: <CloseOutline size="xs" />,
    more: <MoreOutline size="xs" />,
  }

  return (
    <div className={cls}>
      <div className={`${wrapCls}-header`}>
        {title ? (
          <div className={`${wrapCls}-header-content`}>
            {thumbNode}
            {title}
          </div>
        ) : null}
        {icon ? (
          <Touchable
            onPress={e => {
              icon.onPress && icon.onPress(e)
            }}
          >
            <div className={`${wrapCls}-header-icon`}>{Icons[icon.type]}</div>
          </Touchable>
        ) : null}
      </div>
      <div className={`${wrapCls}-content`}>{children}</div>
    </div>
  )
}

Container.displayName = 'Container'

export default withError(Container)
