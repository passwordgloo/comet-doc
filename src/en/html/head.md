# head
::: warning
- You can use   `ctrl + /` to add annotation in Vs code
- Type `html:5` to create a html 5 document fastly
:::

The HTML head is the contents of the `<head>` element. Unlike the contents of the `<body>` element (which are displayed on the page when loaded in a browser), the head's content is not displayed on the page. Instead, the head's job is to contain metadata about the document. 

## title
```html
<title>web page title</title>
```
## meta
::: tip
meta lable is very useful for SEO(Search Engine Optimization) which can find your websites quickly in Google,Bing and other search engines
:::
### document's character encoding
```html
<meta charset="utf-8" />
```
This element specifies the document's character encoding — the character set that the document is permitted to use. utf-8 is a universal character set that includes pretty much any character from any human language. This means that your web page will be able to handle displaying any language; it's therefore a good idea to set this on every web page you create!

### author

```html
<meta name="author" content="Passwordgloo" />
```

### description
```html
<meta name="description" content="foresee the world" />
```
## link
### favicon icon
To further enrich your site design, you can add references to custom icons in your metadata, and these will be displayed in certain contexts. The most commonly used of these is the favicon (short for "favorites icon", referring to its use in the "favorites" or "bookmarks" lists in browsers).
```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
```
### CSS
```html
<link rel="stylesheet" href="my-css-file.css" />
```
## Javascript
```html
<link rel="stylesheet" href="my-css-file.css" />
```
