# 魔改记录
码字不易，留个start再走！！！

## 1.menu菜单汉化
  /theme/buffifly_config.yaml的menu选项汉化

  ```code
    menu:
      主页: / || fas fa-home
      时间轴: /archives/ || fas fa-archive
      标签: /tags/ || fas fa-tags
      分类: /categories/ || fas fa-folder-open
      远方杂谈||fas fa-list:
        - 音乐 || /music/ || fas fa-music
        - 电影 || /movies/ || fas fa-video
      友情链接: /link/ || fas fa-link
      关于我的: /about/ || fas fa-heart
  ```

## 2.代码高亮
  ```
  //  /theme/buffifly_config.yaml

    highlight_theme: mac light 
  ```

## 3.copy-setting
```
# copy settings
# copyright: Add the copyright information after copied content (複製的內容後面加上版權信息)
    copy:
      enable: true
      copyright: true
```

## 4.Algolia(搜索)配置
下载[hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch)
```
  npm install hexo-algoliasearch --save
```
在/theme/buffifly/_config.yaml添加
```
# search (搜索)
# --------------------------------------

# Algolia search
algolia_search:
  enable: true
  hits:
    per_page: 6

  labels:
    input_placeholder: 请输入搜索内容
    hits_empty: "对不起，我没有找到关于: ${query}的内容" # if there are no result
    hits_stats: '${hits} 发现结果在 ${time} ms'
```
到[algolia官网](https://www.algolia.com/)注册账号，然后登录***dashboard***，在左侧菜单找到ApiKey点击按钮

```
//将此配置粘贴与_admin-config.yaml同级的_config.yaml，插件（plugins下面，注意缩进用空格，最好不要用table键）
algolia:
  appId: "Application ID"
  apiKey: "Search-Only API Key"
  adminApiKey: "Admin API Key"
  chunkSize: 5000
  indexName: "your index name"
  fields:
    - content:strip:truncate,0,500
    - excerpt:strip
    - gallery
    - permalink
    - photos
    - slug
    - tags
    - title
```
然后新建Create Index，记住index name，然后把你的index name，Application ID，Search-Only API Key，
Admin API Key一一配置上去

## 4.配置本地搜索

安装[npm install hexo-generator-search --save](https://github.com/Wzpan/hexo-generator-search)

将下面配置复制到与_admin-config.yaml同级的_config.yaml，和algolia一样
```
# Search 
search:
  path: ./public/search.xml
  field: post
  format: html
  limit: 10000
```

path：索引文件的路径，相对于站点根目录
field：搜索范围，默认是 post，还可以选择 page、all，设置成 all 表示搜索所有页面
limit：限制搜索的条目数
在theme/buffifly/_config.yaml开启本地搜索
```
  local_search:
    enable: true
```

## 5.wordCount
安装hexo字数统计依赖
```
  yarn add hexo-wordcount
  # or
  npm i --save hexo-wordcount
```
然后配置到/theme/_config.yaml
```
  wordcount:
    enable: true
    post_wordcount: true
    min2read: true
    total_wordcount: true
```

## 6.打赏码
微信、支付宝付款码放到/img/下符合下面的路径，或者自己配置喜欢的路径，前面一定要有‘/’
```
 reward:
  enable: true
  QR_code:
    - img: /img/wechat.jpg
      link:
      text: wechat
    - img: /img/alipay.jpg
      link:
      text: alipay
```

## 7.分享功能
根据butterifly主题原作者文档介绍配置，内置多种插件，自行选择
## 8.评论功能
同上，自行配置。题主使用的是Valine插件，评论背景是自己添加的，没有css基础请勿修改，以免发生问题。
文件位置在/theme/buffifly/source/css/volantis.css

```
/*valine评论背景失效问题*/
  .v[data-class=v] .veditor {
    background: url('../img/valine_bg.png') 100% 100% no-repeat !important;
    background-size: 12% 100% !important;
  }
```
## 9.聊天功能
主题内置多种聊天插件，请根据官方文档，自行选择。
```
//通用配置
  # Chat Button [recommend]
  # It will create a button in the bottom right     corner of website, and hide the origin button
    chat_btn: true

  # The origin chat button is displayed when scrolling up, and the button is hidden when scrolling down
    chat_hide_show: true
```

## 10.广告位
在/theme/_config.yaml配置,题主没有配置，请大家自行查阅官方文档
```
  # Insert ads manually (手動插入廣告)
  # ad:
  #   index:
  #   aside:
  #   post:
```

## 11.主体自定义配色

```
 theme_color:
   enable: true
   main: "#49B1F5"
   paginator: "#00c4b6"
   button_hover: "#FF7242"
   text_selection: "#00c4b6"
   link_color: "#99a9bf"
   meta_color: "#858585"
   hr_color: "#A4D8FA"
   code_foreground: "#F47466"
   code_background: "rgba(27, 31, 35, .05)"
   toc_color: "#00c4b6"
   blockquote_padding_color: "#49b1f5"
   blockquote_background_color: "#49b1f5"
```

## 12.博客背景及页脚设置
```
  # Website Background (設置網站背景)
  # can set it to color or image (可設置圖片 或者 顔色)
  # The formal of color: '#49B202'
  # The formal of image: url(http://xxxxxx.com/xxx.jpg)
  # White color will be shown as default
  background: url('/buffifly/img/banner/4.jpg')

  # Show the footer background image (same as top_img)
  footer_bg: false  #页脚是否透明

  # the position of bottom right button/default unit: px (右下角按鈕距離底部的距離/默認單位為px)
  rightside-bottom:
```

## 13.彩带背景特效及鼠标特效
改一下：true/false 重启即可
友情提示：最好不要同时开多个，会很卡

## 14.标题锚点
```
# Beautify (美化頁面顯示)
beautify:
  enable: true # 是否开启
  field: post # site/post #生效范围：站点/文章
  title-prefix-icon: '\f0c1' #锚点图标unicode样式
  title-prefix-icon-color: '#F47466'  #锚点图标颜色样式

```

## 15.buffifly内置标签
效果见: [演示传送门]('http://glassyskyforgame.gitee.io/buffifly/2020/07/22/%E4%BD%A0%E5%A5%BD/')



|标签名|语法|参数|
|:--:|:--:|---|
|行内文本|{% span 样式参数, 文本内容 %}|logo, code，red, yellow, green, cyan, blue, gray，small,<br> h4, h3, h2, h1,<br> large, huge, ultra，left, center, right|
  |独立文本|{% p 样式参数, 文本内容 %}|同上|
  |普通标签：|{% note 样式参数, 文本内容 %}|quote, info, warning, done/success, error/danger，<br>quote（蓝色引号）info（蓝色叹号）warning(黄色叹号),done（绿色打钩）,success（绿色打钩）,error(红色禁止),danger(红色打叉)|
|块状标签|{% noteblock 样式参数 %}文本段落{% endnoteblock %}|同上|
|上标式标签|{% tip 样式参数, 文本内容 %}|空(蓝色叹号上标),success (绿色打钩上标),error(红色叉上标),warning(黄色叹号上标)|
|动画标签|{% tip 标签图标样式 动画效果 文本内容 %}|标签图标样式参考普通标签；<br>动画效果：<br>faa-horizontal【摇晃】,faa-flash【若隐若现】,faa-spin【360度旋转】,faa-shake【小幅度摆动】|
|复选框|{% checkbox 样式参数（可选）, 文本（支持简单md） %}|颜色：red, yellow, green, cyan, blue；<br>样式：plus, minus, times；<br>选中状态：checked|
|按钮|{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}|url:链接,<br>text:按钮文字,<br>icon:可选图标,<br>color:可选-按钮背景顔色(默认style时）按钮字体和边框顔色(outline时default/blue/pink/red/purple/orange/green),<br>style:可选按钮样式默认实心outline/留空,<br>layout:可选按钮布局默认为lineblock/留空,<br>position:可选按钮位置前提是设置了layout为block默认为左边center/right/留空,<br>size:可选按钮大小larger/留空|
隐藏按钮|{% hideInline content,display,bg,color %}|content: 文本内容，<br>display: 按钮显示的文字(可选)，<br>bg: 按钮的背景颜色(可选)，<br>color: 按钮文字的颜色(可选)|
|隐藏款按钮|{% hideBlock display,bg,color %}content{% endhideBlock %}|同上|
|选项卡容器|{% tabs tab-id %}<br>tabstart （标签名）<br>这里面写内容，支持的语法格式有限，请尽量**不要**写太过复杂的东西。<br>（endtab）<br>{% endtabs %}|tab-id：必填，如果一个页面有多个 tabs 时，tab-id 不能重复。tab-name：标签文本。|
|折叠容器|{% folding 参数（可选）, 标题 %}content{% endfolding %}|颜色：blue, cyan, green, yellow, red；状态：状态填写 open 代表默认打开|
|fancybox容器|{% fancybox 参数, 列数 %}图片{% endfancybox %}|对齐方向：left, center, right；缩放：stretch；列数：逗号后面直接写列数，支持 2 ～ 8 列。设定列列数之后就是「多行多图」布局，此时图片默认左对齐。为了避免图片大小不一，建议搭配 stretch 来时图片放大填充。|
|音频容器|{% audio 音频链接 %}|无|
|食品容器|{% video 视频链接 %}|对齐方向：left, center,right；<br>列数：逗号后面直接写列数，支持 1 ～ 4 列。|
|latex公式|$$ latex公式内容 $$|无|