---
title: 手风琴
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 参数

### Collapse

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| activeKey        | 当前激活 tab 面板的 key| Array or String   | 默认无，accordion模式下默认第一个元素|
| defaultActiveKey | 初始化选中面板的 key | String   | 无 |
| onChange      |   切换面板的回调   | (key: string): void |  noop  |
| accordion    | `手风琴`模式 | Boolean | false  |
| openAnimation  |  设置自定义切换动画，禁止动画可设为`{}` | Object | 参考 rc-collapse/lib/openAnimationFactory.js 文件  |

### Collapse.Panel

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| key  | 对应 activeKey   | String          | 无     |
| header | 面板头内容 | React.Element or String | 无     |

注意: 目前暂不支持嵌套使用
