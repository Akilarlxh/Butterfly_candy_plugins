<style>
kbd{
  display: inline-block;
  color: #666;
  font: bold 9pt arial;
  text-decoration: none;
  text-align: center;
  padding: 2px 5px;
  margin: 0 5px;
  background: #eff0f2;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border-top: 1px solid #f5f5f5;
  -webkit-box-shadow: inset 0 0 20px #e8e8e8, 0 1px 0 #c3c3c3, 0 1px 0 #c9c9c9,0 1px 2px #333;
  -moz-box-shadow: inset 0 0 20px #e8e8e8, 0 1px 0 #c3c3c3, 0 1px 0 #c9c9c9,0 1px 2px #333;
  -webkit-box-shadow: inset 0 0 20px #e8e8e8, 0 1px 0 #c3c3c3, 0 1px 0 #c9c9c9,0 1px 2px #333;
  box-shadow: inset 0 0 20px #e8e8e8, 0 1px 0 #c3c3c3, 0 1px 0 #c9c9c9,0 1px 2px #333;
  text-shadow: 0 1px 0 #f5f5f5;
}
</style>

# hexo-butterfly-envelope

给`hexo-theme-butterfly`添加 [友链朋友圈](https://akilar.top/posts/8480b91c/)

# 安装

1. 安装插件，在博客根目录`[Blogroot]`下打开终端，运行以下指令：
    ```bash
    npm install hexo-butterfly-fcircle --save
    ```

2. 添加配置信息
  在站点配置文件`_config.yml`或者主题配置文件`_config.butterfly.yml`中添加

  ```yaml
    # fcircle
    # see https://zfe.space/friendcircle/
    # see https://akilar.top/posts/8480b91c/
    ficrcle:
      enable: true #控制开关
      apiurl: https://hexo-circle-of-friends-api.vercel.app/api #api地址
      maxnumber: 20 #【可选】页面展示文章数量
      addnumber: 10 #【可选】每次加载增加的篇数
      opentype: '_blank' #【可选】'_blank'打开新标签,'_self'本窗口打开,默认为'_blank'
      nofollow: true #【可选】开启禁止搜索引擎抓取,默认开启
      preload: #【可选】加载动画图片链接
      css: #【可选】开发者接口，自定义css链接
      js: #【可选】开发者接口，自定义js链接
      path: #【可选】fcircle的路径名称。默认为 fcircle，生成的页面为 fcircle/index.html
      front_matter: #【可选】fcircle页面的 front_matter 配置
        title: 朋友圈
        comments: false
  ```
3. 参数释义

  |参数|备选值/类型|释义|
  |:--|:--|:--|
  |enable|<kbd>true</kbd><kbd>false</kbd>|控制开关|
  |apiurl|<kbd>URL</kbd>|api链接，配置教程参看[基于 hexo 的友链朋友圈](https://zfe.space/friendcircle/)|
  |maxnumber|<kbd>number</kbd>|【可选】填写阿拉伯数字，页面展示文章数量，默认20|
  |addnumber|<kbd>number</kbd>|【可选】填写阿拉伯数字，每次加载增加的篇数，默认10|
  |opentype|<kbd>'_blank'</kbd><kbd>'_self'</kbd> |【可选】'_blank'新标签打开,'_self'本窗口打开,默认为'_blank'|
  |nofollow| <kbd>true</kbd><kbd>false</kbd> |【可选】开启禁止搜索引擎抓取,默认开启|
  |preload| <kbd>URL</kbd>|【可选】加载动画图片链接|
  |css| <kbd>URL</kbd>|【可选】开发者接口，自定义css链接|
  |js| <kbd>URL</kbd>|【可选】开发者接口，自定义js链接|
  |path| <kbd>string</kbd>|【可选】字符串，fcircle的路径名称。默认为 fcircle，生成的页面为 fcircle/index.html|
  |front_matter|<kbd>object</kbd>|【可选】写法见上文示例，fcircle页面的 front_matter 配置|

# 截图
  ![](https://cdn.jsdelivr.net/gh/Akilarlxh/Picgo/assets/Friend-link-subscription-dfbba739.png)
