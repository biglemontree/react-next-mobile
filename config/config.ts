// this file only used by dev
// not used by father-build

const componentMenus = [
  {
    title: '导航',
    children: [
      'Badge',
      'GuideModal',
      'HorizontalScrollbar',
      'NoticeBar',
      'TabBar',
      'Tabs',
      'Tag',
      'Tips',
    ],
  },
  {
    title: '数据展示',
    children: [
      'Avatar',
      'Collapse',
      'Container',
      'Coupon',
      'Footer',
      'Icon',
      'List',
      'SearchBar',
      'Steps',
      'Swiper',
    ],
  },
  {
    title: '数据录入',
    children: [
      'Button',
      'Checkbox',
      'Form',
      'InputItem',
      'NumericInput',
      'Picker',
      'Radio',
      'Selector',
      'Stepper',
      'Switch',
      'Terms',
    ],
  },
  {
    title: '反馈',
    children: [
      'ActionSheet',
      'ErrorBlock',
      'ErrorPage',
      'Loading',
      'Modal',
      'Popover',
      'PullToRefresh',
      'Result',
      'SwipeAction',
      'Toast',
    ],
  },
  {
    title: '其他',
    children: ['CountDown', 'LocaleProvider', 'Tracker'],
  },
]

export default {
  title: 'Ant Design Mobile',
  mode: 'site',
  exportStatic: {},
  hash: true,
  favicon:
    'https://gw.alipayobjects.com/mdn/rms/afts/img/A*ANrfQaxlbVcAAAAAAAAAAABkARQnAQ',
  logo:
    'https://gw.alipayobjects.com/mdn/rms/afts/img/A*ANrfQaxlbVcAAAAAAAAAAABkARQnAQ',
  menus: {
    '/components': componentMenus,
  },
  locales:[['zh-CN', '中文']],
  theme: {
    '@hd': '0.02rem',
  },
  targets: {
    ios: 8,
  },
  outputPath: 'doc_dist',
  styles: [
    `.__dumi-default-mobile-demo-layout {
      min-height: 100vh;
      background: #f5f5f5;
      padding: 0 !important;
      overflow: hidden;
      font-size: 0.26rem;
    }
    .__dumi-default-device-status {
      border-bottom: 1px solid #e3e3e3;
    }
    .__dumi-default-mobile-previewer {
      font-size: initial;
    }
    `,
  ],
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
}
