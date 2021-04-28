# hexo-butterfly-envelope

给`hexo-theme-butterfly`添加 [友链朋友圈](https://akilar.top/posts/8480b91c/)

# 安装

1. 安装插件
    ```bash
    npm install hexo-butterfly-fcircle
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
        maxnumber: 20 #页面展示文章数量
        addnumber: 10 #每次加载增加的篇数
        opentype: _blank #'_blank'打开新标签,'_self'本窗口打开
        nofollow: true #开启禁止搜索引擎抓取
        # 自定义loading图 例如: <i class="fa fa-spinner fa-spin"></i>
        # 自定义loading图 例如: <img src="你的图片地址" alt="加载中...">
        preload:
        path: #【可选】fcircle的路径名称。默认为 comments，生成的页面为 fcircle/index.html
        front_matter: #【可选】fcircle页面的 front_matter 配置
          title: 朋友圈
          comments: false
    ```

# 截图
  ![](https://cdn.jsdelivr.net/gh/Akilarlxh/Picgo/assets/Friend-link-subscription-dfbba739.png)
