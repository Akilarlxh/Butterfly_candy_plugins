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

给`hexo-theme-butterfly`添加 [信封样式留言板](https://akilar.top/posts/e2d3c450/)

# 安装

1. 安装插件,在博客根目录`[Blogroot]`下打开终端，运行以下指令：
  ```bash
  npm install hexo-butterfly-envelope --save
  ```

2. 添加配置信息，以下为写法示例
  在站点配置文件`_config.yml`或者主题配置文件`_config.butterfly.yml`中添加

  ```yaml
    # envelope_comment
    # see https://akilar.top/posts/e2d3c450/
    envelope_comment:
      enable: true #控制开关
      cover: https://ae01.alicdn.com/kf/U5bb04af32be544c4b41206d9a42fcacfd.jpg #信笺头部图片
      message: #信笺正文，多行文本，写法如下
        - 有什么想问的？
        - 有什么想说的？
        - 有什么想吐槽的？
        - 哪怕是有什么想吃的，都可以告诉我哦~
      bottom: 自动书记人偶竭诚为您服务！ #仅支持单行文本
      height: #1050px，信封划出的高度
      path: #【可选】comments 的路径名称。默认为 comments，生成的页面为 comments/index.html
      front_matter: #【可选】comments页面的 front_matter 配置
        title: 留言板
        comments: true
  ```
3. 参数释义

  |参数|备选值/类型|释义|
  |:--|:--|:--|
  |enable|<kbd>true</kbd><kbd>false</kbd>|控制开关|
  |cover|<kbd>URL</kbd>|信笺头部图片链接|
  |message|<kbd>text</kbd>|信笺正文，支持多行文本，写法见上文示例|
  |bottom|<kbd>text</kbd>|信笺底部信息，仅支持单行文本|
  |height|<kbd>1050px</kbd>|默认1050px，信封划出的高度|
  |path|<kbd>comments</kbd>|【可选】comments 的路径名称。默认为 comments，生成的页面为 comments/index.html|
  |front_matter|<kbd>object</kbd>|【可选】comments页面的 front_matter 配置,写法见上文示例|
# 截图
![](https://cdn.jsdelivr.net/gh/Akilarlxh/Picgo@v2.3/smms/A7DXgfwFJujLCzE.png)
