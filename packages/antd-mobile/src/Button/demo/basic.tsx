import * as React from 'react'
import {
  unstable_Button as Button,
  unstable_Modal as Modal,
} from 'reactui-mobile-mobile'
import { AlipayCircleFill } from 'reactui-mobile-mobile-icons'
import { useSelect } from '../../_internal/demo'

const fn = (e: any) =>
  Modal.alert({
    content: `trigger type: ${e.type}`,
  })

export default () => {
  const [state, view] = useSelect({
    multiLine: {
      desc: '多行',
      v: false,
    },
    capsule: {
      desc: '胶囊',
      v: false,
    },
    capsuleSize: {
      desc: '胶囊尺寸',
      hide(d) {
        return !d.capsule
      },
      v: 'md',
      type: 'radio',
      options: ['md', 'lg', 'sm'],
    },
    icon: {
      desc: '图标',
      v: false,
    },
    disabled: {
      desc: '禁用',
      v: false,
    },
    loading: {
      desc: '加载中',
      v: false,
    },
  })

  const addProps = {
    subTitle: state.multiLine ? '第二行' : undefined,
    capsule: state.capsule,
    icon: state.icon ? AlipayCircleFill : undefined,
    disabled: state.disabled,
    loading: state.loading,

    // 这类型暂时没办法处理
    capsuleSize: state.capsule ? (state.capsuleSize as any) : undefined,

    onPress: fn,
  }

  return (
    <>
      {view}
      <div
        style={{ padding: '0 0.24rem' }}
        onClick={() => {
          console.log('should log when button press call')
        }}
      >
        <h3>changeable</h3>
        <Button {...addProps} data-y="111">
          default
        </Button>
        <br />
        <Button type="primary" {...addProps}>
          primary
        </Button>
        <br />
        <Button type="ghost" {...addProps}>
          ghost
        </Button>
        <br />
        <Button type="warn" {...addProps}>
          warn
        </Button>
        <br />
        <Button type="warn-ghost" {...addProps}>
          warn-ghost
        </Button>
        <br />
        <Button type="light" {...addProps} loadingText="发送中">
          light
        </Button>
      </div>
    </>
  )
}
