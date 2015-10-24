# co-wechat-parser

解析微信推送的XML消息，可用于koa中间件，也可以直接调用，返回Promise。English document is [below](#english-document).

## 安装

使用[npm](https://www.npmjs.com/package/co-wechat-parser)安装：

```bash
npm install --save co-wechat-parser
```

## 用法示例

### 作为中间件使用

```javascript

var koa = require('koa');
var parser = require('co-wechat-parser');

var app = koa();
app.use(parser.middleware());
```

### 直接调用

```javascript

var koa = require('koa');
var parser = require('co-wechat-parser');

var app = koa();
app.use(function() {
	parser.parse(this.req)
		.then(function(message) {
			console.log(message);
		})
		.catch(function(error) {
			console.log(error);
		});
});
```

## API

### camelcase

默认为`true`，将结果Object的key转为驼峰形式。可设置为`false`，保持微信的原始形式。

```javascript

var koa = require('koa');
var parser = require('co-wechat-parser');

var app = koa();
app.use(parser.middleware({
    camelcase: false
}));
```

### key

默认为`body`，将结果Object挂载到`this.request.body`上。可设置为其他的`String`，改变挂载属性。

```javascript

var koa = require('koa');
var parser = require('co-wechat-parser');

var app = koa();
app.use(parser.middleware({
    key: 'wexin'
}));

// 从`this.request.wexin`读取数据
```

### secret

默认为 `undefined`, `secret` 微信密钥, 如果设置了该值, 将使用密钥签名验证微信返回的消息. 可设置为 `String`.

```javascript

var koa = require('koa');
var parser = require('co-wechat-parser');

var app = koa();
app.use(parser.middleware({
    secret: 'your secret from wechat'
}));

```

# English document

An XML message parser for WeChat used in Koa. Can be middleware or promise.

## Install

Install with [npm](https://www.npmjs.com/package/co-wechat-parser)

```bash
npm install --save co-wechat-parser
```

## Example

### Use as middleware

```javascript

var koa = require('koa');
var parser = require('co-wechat-parser');

var app = koa();
app.use(parser.middleware());
```

### Use as promise

```javascript

var koa = require('koa');
var parser = require('co-wechat-parser');

var app = koa();
app.use(function() {
	parser.parse(this.req)
		.then(function(message) {
			console.log(message);
		})
		.catch(function(error) {
			console.log(error);
		});
});
```

## API

### camelcase

Default is `true`, will make the key of return object as camelcase. If set to `false`, the key will keep the original format.

```javascript

var koa = require('koa');
var parser = require('co-wechat-parser');

var app = koa();
app.use(parser.middleware({
    camelcase: false
}));
```

### key

Default is `body`, will setup the result on `this.request.body`. Can be set to another `String`.

```javascript

var koa = require('koa');
var parser = require('co-wechat-parser');

var app = koa();
app.use(parser.middleware({
    key: 'wexin'
}));

// Use `this.request.wexin` to get the result.
```

### secret

Default is `undefined`, `secret` is the merchant secret of WeChat, if set, will validate signature of payload from WeChat. Can be set as `String`.

```javascript

var koa = require('koa');
var parser = require('co-wechat-parser');

var app = koa();
app.use(parser.middleware({
    secret: 'your secret from wechat'
}));

```

Published under the [MIT License](http://opensource.org/licenses/MIT).
