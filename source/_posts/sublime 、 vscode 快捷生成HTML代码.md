
>文章转载自https://www.cnblogs.com/suitongyu/p/12043791.html

@[TOC](目录)
## 基本html结构
输入 **!+Enter**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
## 生成div加类名的快捷键
输入 div.list>div.item_$*6
```html
<div class="list">
    <div class="item_1"></div>
    <div class="item_2"></div>
    <div class="item_3"></div>
    <div class="item_4"></div>
    <div class="item_5"></div>
    <div class="item_6"></div>
</div>
```


## 带类名的div
输入 div.wrapper
```html
<div class="wrapper"></div>
```
## 带id的div
div#wrapper
```html
<div id="wrapper"></div>
```
## 属性 []
span[title="test"]
```html
<span title="test"></span>
```
## 后代 >
输入div>span>a
```html
<div><span><a href=""></a></span></div>
```
## 兄弟 +
div+p+span
```html
<div></div>
<p></p>
<span></span>
```
## 上级 ^
div>span^i
```html
<div><span></span></div>
<i></i>
```
## 乘法 *
ul>li*2
```html
<ul>
    <li></li>
    <li></li>
</ul>
```
## 文本 {}
div>span{this is test}
```html
<div><span>this is test</span></div>
```
## 自增符 $
ul>li.list_${list $}*3
```html
<ul>
    <li class="list_1">list 1</li>
    <li class="list_2">list 2</li>
    <li class="list_3">list 3</li>
</ul>
```
ul>li.item$@3*3 “@3” （表示从3开始计数）
```html
<ul>
    <li class="item3">list 1</li>
    <li class="item4">list 2</li>
    <li class="item5">list 3</li>
</ul>
```
## 隐式转换
.class
```html
<div class="class"></div>
```
ul>.item
```html
<ul>
    <li class="item"></li>
</ul>
```
table>.row>.col
```html
<table>
    <tr class="row">
        <td class="col"></td>
    </tr>
</table>
```


