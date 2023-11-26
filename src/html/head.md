---
title: 骨架结构
---

HTML(Hyper Text Markup Language)中文译名：超文本标记语言

网页类似于一篇文章，有一定的结构，比如开头、正文、结尾

网页中的固定结构是要通过特定的`HTML标签`实现

::: info HTML骨架结构的构成

- html标签
- head标签
- body标签

:::

::: tip emment语法

 使用Emment语法`html:5`快速生成html骨架结构

:::

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```

## 文档标识

::: tabs

@tab HTML5

```html
<!DOCTYPE html>
```

@tab HTML4(已废弃)

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http\://www\.w3.org/TR/html4/strict.dtd">
```

:::

## `<html>`

::: note

告知浏览器网页采用的语言

:::

```html
<html lang="zh-cmn-Hans">        //简体中文，建议不用zh-cn
<html lang="en">                 //英文
```

## `<head>`

### `<meta>`

::: note

**meta**标签方便网站SEO

:::

```html
<meta charset="UTF-8">    //编码格式
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=7">
<meta name="description" content="教程,html">
<meta name="keywords" content="html">
```

### `<link>`

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">    //网站小图标
<link rel="stylesheet" href="style.css">    //导入外部css
<link rel="alternate" href="rss.xml" type="application/rss+xml" title="RSS">
```

### `<style>`

css内联样式表

```html
<style>
    //css代码书写处
</style>
```

### `<title>`

```html
<title>网站标题</title>
```

## `<body>`

> :link: [常用标签](./label.md)书写处

