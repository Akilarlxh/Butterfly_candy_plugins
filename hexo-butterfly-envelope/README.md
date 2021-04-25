# hexo-butterfly-envelope

给`hexo-theme-butterfly`添加 [信封样式留言板](https://akilar.top/posts/58900a8/)

# 安装

1. 安装插件
    ```bash
    npm install hexo-butterfly-envelope
    ```

2. 添加配置信息
    在站点配置文件`_config.yml`或者主题配置文件`_config.butterfly.yml`中添加

    ```yaml
      # envelope_comment
      # see https://akilar.top/posts/58900a8/
      envelope_comment:
        enable: true
        cover: https://ae01.alicdn.com/kf/U5bb04af32be544c4b41206d9a42fcacfd.jpg
        message: 有什么想问的？<br>有什么想说的？<br>有什么想吐槽的？<br>哪怕是有什么想吃的，都可以告诉我哦~
        bottom: 自动书记人偶竭诚为您服务！
        height: #1050px，信封划出的高度
        path: #【可选】comments 的路径名称。默认为 comments，生成的页面为 comments/index.html
        front_matter: #【可选】comments页面的 front_matter 配置
    ```

# 截图
  ![](https://cdn.jsdelivr.net/gh/Akilarlxh/Picgo@v2.3/smms/A7DXgfwFJujLCzE.png)
