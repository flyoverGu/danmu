var parser = require('..');
var parse = parser.parse;
var fs = require('fs');
var path = require('path');
require('should');

var opts = {
  camelcase: false
};

describe('parse()', function() {
  it('parse text message should ok', function(done) {
    var text = path.join(__dirname, 'xmls/text.xml');
    var stream = fs.createReadStream(text);
    parse(stream, opts).then(function(message) {
      message.should.be.Object;
      message.should.have.property('MsgId');
      message.should.have.property('ToUserName');
      message.should.have.property('FromUserName');
      message.should.have.property('CreateTime');
      message.should.have.property('MsgType', 'text');
      message.should.have.property('Content');
      done();
    });
  });

  it('parse image message should ok', function(done) {
    var image = path.join(__dirname, 'xmls/image.xml');
    var stream = fs.createReadStream(image);
    parse(stream, opts).then(function(message) {
      message.should.be.Object;
      message.should.have.property('MsgId');
      message.should.have.property('ToUserName');
      message.should.have.property('FromUserName');
      message.should.have.property('CreateTime');
      message.should.have.property('MsgType', 'image');
      message.should.have.property('PicUrl');
      message.should.have.property('MediaId');
      done();
    });
  });

  it('parse voice message should ok', function(done) {
    var voice = path.join(__dirname, 'xmls/voice.xml');
    var stream = fs.createReadStream(voice);
    parse(stream, opts).then(function(message) {
      message.should.be.Object;
      message.should.have.property('MsgId');
      message.should.have.property('ToUserName');
      message.should.have.property('FromUserName');
      message.should.have.property('CreateTime');
      message.should.have.property('MsgType', 'voice');
      message.should.have.property('MediaId');
      message.should.have.property('Format');
      done();
    });
  });

  it('parse mass result event should ok', function(done) {
    var result = path.join(__dirname, 'xmls/mass_send_job_finish.xml');
    var stream = fs.createReadStream(result);
    parse(stream, opts).then(function(message) {
      message.should.be.Object;
      message.should.have.property('ToUserName');
      message.should.have.property('FromUserName');
      message.should.have.property('CreateTime');
      message.should.have.property('MsgType', 'event');
      message.should.have.property('Event', 'MASSSENDJOBFINISH');
      message.should.have.property('Status');
      message.should.have.property('TotalCount');
      message.should.have.property('FilterCount');
      message.should.have.property('SentCount');
      message.should.have.property('ErrorCount');
      message.should.have.property('MsgID'); // 注意：这里的MsgID有所区别
      done();
    });
  });

  it('parse bad message should not ok', function(done) {
    var badxml = path.join(__dirname, 'xml.js');
    var stream = fs.createReadStream(badxml);
    parse(stream, opts).catch(function(error) {
      error.should.be.ok;
      done();
    });
  });

  it('parse bad xml should not ok', function(done) {
    var badxml = path.join(__dirname, 'xmls/bad.xml');
    var stream = fs.createReadStream(badxml);
    parse(stream, opts).catch(function(error) {
      error.should.be.ok;
      done();
    });
  });

  it('parse pay notification xml should ok', function(done) {
    var payxml = path.join(__dirname, 'xmls/pay_notify.xml');
    var stream = fs.createReadStream(payxml);
    parse(stream, opts).then(function(message) {
      message.should.be.Object;
      done();
    });
  });

  it('parse pay notification xml with bad secret should not ok', function(done) {
    var payxml = path.join(__dirname, 'xmls/pay_notify.xml');
    var stream = fs.createReadStream(payxml);
    parse(stream, {secret: 'wrongsecret'}).catch(function(error) {
      error.should.be.ok;
      done();
    });
  });

  it('parse pay notification xml with bad sign should not ok', function(done) {
    var payxml = path.join(__dirname, 'xmls/pay_notify_bad_sign.xml');
    var stream = fs.createReadStream(payxml);
    parse(stream, {secret: 'mysecret'}).catch(function(error) {
      error.should.be.ok;
      done();
    });
  });

  it('parse xml to camelcase by default should ok', function(done) {
    var payxml = path.join(__dirname, 'xmls/pay_notify.xml');
    var stream = fs.createReadStream(payxml);
    parse(stream, {secret: 'mysecret'}).then(function(message) {
      message.should.be.Object;
      message.should.have.property('totalFee');
      done();
    });
  });

  it('parse xml to camelcase if camelcase is true should ok', function(done) {
    var payxml = path.join(__dirname, 'xmls/pay_notify.xml');
    var stream = fs.createReadStream(payxml);
    parse(stream, {camelcase: true}).then(function(message) {
      message.should.be.Object;
      message.should.have.property('totalFee');
      done();
    });
  });

  it('parse xml with sign but no secret set should ok', function(done) {
    var payxml = path.join(__dirname, 'xmls/pay_notify_bad_sign.xml');
    var stream = fs.createReadStream(payxml);
    parse(stream).then(function(message) {
      message.should.be.Object;
      done();
    });
  });

  it('parse xml without sign if secret set should not ok', function(done) {
    var payxml = path.join(__dirname, 'xmls/pay_notify_no_sign.xml');
    var stream = fs.createReadStream(payxml);
    parse(stream, {secret: 'somesecret'}).catch(function(error) {
      error.should.be.ok;
      done();
    });
  });
});
