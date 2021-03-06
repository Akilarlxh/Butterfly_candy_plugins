'use strict'
// 全局声明插件代号
const pluginname = 'butterfly_clock'
// 全局声明依赖
const pug = require('pug')
const path = require('path')
const urlFor = require('hexo-util').url_for.bind(hexo)
const util = require('hexo-util')
// 过滤器优先级，priority 值越低，过滤器会越早执行，默认priority是10。
const pre_priority = hexo.config.electric_clock.priority || hexo.theme.config.electric_clock.priority
const priority = pre_priority ? pre_priority : 10

hexo.extend.filter.register('after_generate', function (locals) {
  // 首先获取整体的配置项名称
  const config = hexo.config.electric_clock || hexo.theme.config.electric_clock
  // 如果配置开启
  if (!(config && config.enable)) return
  // 集体声明配置项
    const data = {
      enable_page: config.enable_page ? config.enable_page : "all",
      layout_type: config.layout.type,
      layout_name: config.layout.name,
      layout_index: config.layout.index ? config.layout.index : 0,
      loading: config.loading ? urlFor(config.loading) : "https://cdn.jsdelivr.net/gh/Zfour/Butterfly-clock/clock/images/weather/loading.gif"
    }
  // 渲染页面
  const temple_html_text = config.temple_html ? config.temple_html : pug.renderFile(path.join(__dirname, './lib/html.pug'),data)
  //cdn资源声明
    //样式资源
  const css_text = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Zfour/hexo-electric-clock@1.0.6/clock.css">`
    //脚本资源
  const js_text = `<script src="https://pv.sohu.com/cityjson?ie=utf-8"></script><script data-pjax src="https://cdn.jsdelivr.net/gh/Zfour/hexo-electric-clock@1.0.6/clock.js"></script>`
  //注入容器声明
  var get_layout
  //若指定为class类型的容器
  if (data.layout_type === 'class') {
    //则根据class类名及序列获取容器
    get_layout = `document.getElementsByClassName('${data.layout_name}')[${data.layout_index}]`
  }
  // 若指定为id类型的容器
  else if (data.layout_type === 'id') {
    // 直接根据id获取容器
    get_layout = `document.getElementById('${data.layout_name}')`
  }
  // 若未指定容器类型，默认使用id查询
  else {
    get_layout = `document.getElementById('${data.layout_name}')`
  }

  //挂载容器脚本
  var user_info_js = `<script data-pjax>
                        function ${pluginname}_injector_config(){
                          var parent_div_git = ${get_layout};
                          var item_html = '${temple_html_text}';
                          console.log('已挂载${pluginname}')
                          // parent_div_git.innerHTML=item_html+parent_div_git.innerHTML // 无报错，但不影响使用(支持pjax跳转)
                          parent_div_git.insertAdjacentHTML("afterbegin",item_html) // 有报错，但不影响使用(支持pjax跳转)
                          }
                        if( ${get_layout} && (location.pathname ==='${data.enable_page}'|| '${data.enable_page}' ==='all')){
                        ${pluginname}_injector_config()
                        }
                      </script>`
  // 注入用户脚本
  // 此处利用挂载容器实现了二级注入
  hexo.extend.injector.register('body_end', user_info_js, "default");
  // 注入样式资源
  hexo.extend.injector.register('body_end', js_text, "default");
  // 注入脚本资源
  hexo.extend.injector.register('head_end', css_text, "default");
},priority)
