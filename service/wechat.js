let conf = require('../config');

let roomSer = require('./room');

module.exports = {

    verify: function*() {
        let {
            signature, timestamp, nonce, echostr
        } = this.query;
        if (verifyWechat(signature, timestamp, nonce)) {
            this.body = echostr;
        } else {
            this.body = "fail";
        }
    },

    receiveMsg: function*() {
        let {
            signature, timestamp, nonce, echostr
        } = this.query;
        console.log(this.request.body);
        this.set('Content-Type', 'text/xml');
        if (this.request.body.msgtype == 'text') {
            // 如果发送文本内容
            this.body = initReplyMessage(this.request.body);
            emitMsg(this.request.body);
        }
    }

}

let initReplyMessage = (m) => {
    let c = [{
        xml: [{
            ToUserName: m.fromusername
        }, {
            FromUserName: m.tousername
        }, {
            CreateTime: new Date().getTime()
        }, {
            MsgType: 'text'
        }, {
            Content: '你的内容已经上墙了'
        }]
    }];
    return xml(c);
}

let verifyWechat = (signature, timestamp, nonce) => {
    if (!signature || !timestamp || !nonce) {
        return false;
    }
    var arr = [conf.token, timestamp, nonce];
    arr.sort();
    var str = arr.join('');
    return signature == sha1(str);
}
