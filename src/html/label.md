---
title: 标签学习
---

## 排版标签

### 标题标签

```html
<h1>1级标题</h1>
<h2>2级标题</h2>
<h3>3级标题</h3>
<h4>4级标题</h4>
<h5>5级标题</h5>
<h6>6级标题</h6>
```
### 段落标签

```html
<p>段落文字</p>
```

### 换行标签

使用`<br>`强制换行

### 水平线标签

```html
<hr>
```

## 文本格式化标签

| 标签 | 说明   | 标签   | 说明   |
| ---- | ------ | ------ | ------ |
| b    | 加粗   | strong | 加粗   |
| u    | 下划线 | ins    | 下划线 |
| i    | 倾斜   | em     | 倾斜   |
| s    | 删除线 | del    | 删除线 |

## 媒体标签

### 图片标签

::: tip

属性名="属性值"

:::

::: warning

- 当图片加载失败时，显示alt文本
- 无障碍网站设计时，必须要有alt属性

:::

```html
<img src="" width="" height="" alt="图片说明">
```

### 路径

1. 绝对路径
2. 相对路径
   - 同级
   - 下级
   - 父级

### 音频标签

```html
<audio src="" controls></audio>
```

| 属性名   | 功能           |
| -------- | -------------- |
| src      | 音频的路径     |
| controls | 显示播放的控件 |
| autoplay | 自动播放       |
| loop     | 循环播放       |

### 视频标签

```html
<video src="" controls></video>
```

| 属性     | 功能                        |
| -------- | --------------------------- |
| src      | 视频的路径                  |
| controls | 显示播放的控件              |
| autoplay | 自动播放(配合muted实现静音) |
| loop     | 循环播放                    |

## 链接标签

```html
<a href="" target="">超链接</a>
```

| 属性   | 功能                          |
| ------ | ----------------------------- |
| href   | 链接地址                      |
| target | `_blank`新页面，`_self`当前页 |

## 列表标签

<CodeGroup>

<CodeGroupItem title="无序">

::: tip emment语法

`ul>li{无序列表项目}*2`

::: 



```html
<ul>
    <li>无序列表项目</li>
    <li>无序列表项目</li>
</ul>
```
</CodeGroupItem>

<CodeGroupItem title="有序">

::: tip emment语法
`ul>li{有序列表项目}*2`
:::


```html
<ol>
    <li>有序列表项目</li>
    <li>有序列表项目</li>
</ol>
```
</CodeGroupItem>

<CodeGroupItem title="自定义">

::: tip emment语法

`dl>dt{标题}+dd{内容}*2`

:::

```html
<dl>
    <dt>标题</dt>
    <dd>内容</dd>
    <dd>内容</dd>
</dl>
```
</CodeGroupItem>
</CodeGroup>

## 表格标签

::: warning

建议使用`tbody`、`tfoot`结构化标签

:::

| 属性      | 功能     |
| --------- | -------- |
| `colspan` | 跨列合并 |
| `rowspan` | 跨行合并 |

```html
<table>
<caption>标题</caption>
    <thead>
        <th>行标题1</th>
        <th>行标题2</th>
    </thead>
<tbody>
    <tr>
        <td>项目1</td>
        <td>项目2</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</tbody>
<tfoot>
    <tr>
        <td></td>
        <td></td>
    </tr>
</tfoot>
</table>
```

## 表单

::: tip emment语法

form

:::

```html
<form action="">
</form>
```

### input

::: danger 请注意

button类型通常不会使用，请使用button标签替代

:::

|   Type   |   说明   |              属性              | Emment语法 |                             图片                             |
| :------: | :------: | :----------------------------: | :--------: | :----------------------------------------------------------: |
|   text   |  文本框  | placeholder、width、height | `input:t`  | ![img](https://lfs.k.topthink.com/lfs/26c2ee344c2472744a08b0930568daba04edb07a2d6c1ba5e39204494142d7a0.dat) |
| password |   密码   |       name、placeholder        | `input:p`  | ![img](https://lfs.k.topthink.com/lfs/f318fae712fa052107491377a6f82e7ec461e9ce9e92ab20ed334b105db08004.dat) |
|  radio   |  单选框  |       name、checked        | `input:r`  | ![img](https://lfs.k.topthink.com/lfs/f4bb1f9c540a18a2205001a5c28e73557ca9f9966673ad599737f78b2df20180.dat) |
| checkbox |  多选框  |         name、checked          | `input:c`  | ![img](https://lfs.k.topthink.com/lfs/ae35325af7b41906ebe1d5ea44fa0de23cfd2feaa94bdb46dc99596ae41b0a95.dat) |
|   file   | 文件选择 |           value            | `input:f`  | ![img](https://lfs.k.topthink.com/lfs/a3898bbe97113fdee3cb02269ede648419dea1eb62fb0e07a01dd9eddc3b24f4.dat) |
|  submit  |   提交   |             value              | `input:s`  | ![img](https://lfs.k.topthink.com/lfs/a6d7369e8345f9d948642d748749e5b18fda4b6daa757c21a2a220233f63a98d.dat) |
|  reset   |   重置   |             value              |            |                                                              |
|  button  |   普通   |             value              | `input:b`  | ![img](https://lfs.k.topthink.com/lfs/739fcff3199149d36901836dd816204d7fccb815f9c63df98b597c2eb5264e8e.dat) |

placeholder:提示文字，可通过css修改样式

`checked` 默认状态

 `value` 可修改按钮名称

### button

|  Type  | 说明 | 属性  |
| :----: | :--: | :---: |
| submit | 提交 | value |
| reset  | 重置 | value |

### select

::: tip emment语法

select>option*2

:::

```html
<select>
    <option>red</option>
    <option selected>blue</option>
</select>
```

### textarea

```html
<textarea cols="200" rols="100"></textarea>
```

## 语义化标签

### 无语义标签

网页中常会用`<div>`、`<span>`进行布局

### 有语义标签 <Badge text="了解" type="info" />

- article
- nav
- section
- aside
- sidebar
- header
- footer
- ……
