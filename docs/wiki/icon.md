# 内置 Icon
```tsx | pure
import { AlipayCircleFill } from '@frontend/mobile-icons'
<AlipayCircleFill color="red" />
```


# 自定义 Icon

## svg 生成 meta

```tsx | pure
import { _getIconByMeta } from '@frontend/mobile-icons'

const meta = {
  type: 'custom-icon',
  name: 'CustomIcon',
  content: '<svg>xxx</svg>',
}

const CustomIcon = _getIconByMeta(meta)

<CustomIcon />
```

## iconfont

首先在 iconfont.cn 选取你心仪的图标，然后生成对应的 js

```tsx | pure
import { Icon } from '@frontend/mobile'

const MyIcon = Icon.createFromIconfontCN(
  '//at.alicdn.com/t/font_1511412_ksruzvafwng.js',
)

<MyIcon type="iconclose-fill" color="red" />
```
