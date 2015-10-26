let koa = require('koa');
let bodyparser = require('koa-bodyparser');
let sha1 = require('sha1');
let wechatparser = require("co-wechat-parser").middleware;
let xml = require('xml');
let serve = require('koa-static');

let routes = require('routes');

let app = koa();

app.use(serve('.'));
app.use(function*(next) {
    try {
        yield next;
    } catch (e) {
        console.log(e);
    }
});
app.use(wechatparser());
app.use(bodyparser());

routes(app);

let port = 8080;
app.listen(port, () => console.log("start !!!"));

// socket
let server = require('http').Server(app.callback());
let io = require('socket.io')(server);

let emitMsg = (msg) => {
    let content = {
        uid: msg.tousername,
        msg: msg.content,
        msgTime: msg.createtime,
        msgTpye: msg.msgtype,
        id: msg.msgid
    };
    io.emit('msg', content);
}

io.on('connection', (socket) => {
    console.log('connection success');
    socket.on('disconnect', () => console.log("disconnect"));
});

server.listen(8081);
