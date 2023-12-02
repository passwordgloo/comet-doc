---
icon: square-2
---
# labels
## paragraph
In HTML, each paragraph has to be wrapped in a `<p>` element, like so:
::: normal-demo
```html
<p>I am a paragraph, oh yes I am.</p>
```
:::
## headings
::: tip
Use `Ctrl + D` to multiple select the same content in vs code
:::
::: normal-demo
```html
<h1>1 heading element</h1>
<h2>2 heading element</h2>
<h3>3 heading element</h3>
<h4>4 heading element</h4>
<h5>5 heading element</h5>
<h6>6 heading element</h6>
```
:::

This is a `<span>` element. It has no semantics.You use it to wrap content when you want to apply CSS to it (or do something to it with JavaScript) without giving it any extra meaning.

::: normal-demo 
```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```
:::
## link
::: normal-demo
```html
You can visit <a href="https://github.com/passwordgloo" target="_blank">my github page</a> to learn more about me
```
:::
`target="_blank`: new tab<br>
`target="_self`:  current page

## router
```bash
./
../   //upper layer
~/    //root
```

## media
:::: tabs
@tab video
```html
<video src="file_address.mp4" controls autoplay muted loop></video>
```
@tab audio
```html
<audio src="file_address" controls autoplay loop></audio>
```
::::
## list
:::: tabs
@tab Ordered
::: normal-demo
```html
<!-- ol>li{ordered list}*3 -->
<ol>
    <li>ordered list</li>
    <li>ordered list</li>
    <li>ordered list</li>
</ol>
```
:::
@tab Unordered
::: normal-demo
```html
<!-- ul>li{Unordered list}*3 -->
<ul>
    <li>Unordered list</li>
    <li>Unordered list</li>
    <li>Unordered list</li>
</ul>
```
:::
@tab other list
::::

## table
::: tip emmet
type `table` to set up a new table
:::
```html
<table>
  <caption>table title</caption>
<tbody>
    <tr>
        <td></td>
        <td></td>
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