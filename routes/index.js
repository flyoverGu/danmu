let route = require('koa-route');
let wechat = require('../service/wechat');

let api = "/api/v1/";
module.exports = function(app) {

    app.use(route.get(api + "wechat/verify", wechat.verify);

    app.use(route.post(api + "wechat/verify", wechat.receiveMsg));

    app.use(route.get(api + "room/create", room.create));
}

