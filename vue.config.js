module.exports = {
  configureWebpack: {
    resolve: {//解决路径相关 的问题
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: 'px',  // 需要转换的单位，默认为"px"
            viewportWidth: 375, //  设计稿的视口宽度
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ['*'], // 能转化为vw的属性列表
            viewportUnit: 'vw', //  希望使用的视口单位
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 需要忽略的CSS选择器
            minPixelValue: 1, // 最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            replace: true, // 是否直接更换属性值，而不添加备用属性
            exclude: /node_modules/, // 忽略某些文件夹下的文件或特定文件
            include: undefined,  // 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: 'vw', // 横屏时使用的单位
            landscapeWidth: 568 // 横屏时使用的视口宽度
          })
        ]
      }
    }
  }
}

/**
 * 1.在js中使用正则：/正则相关规则/
 * 2.exclude中存放的元素必须是正则表达式
 * 3.按照排除的文件写对应的正则:
 * 正则的规则：
 * 1>^abc:表示匹配的内容，必须以什么内容开头(以abc开头)
 * 2>abc$:表示匹配的内容，必须以什么内容结尾(以abc结尾)
 */