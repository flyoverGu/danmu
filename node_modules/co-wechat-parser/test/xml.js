module.exports = {
  text: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[fromUser]]></FromUserName>'
  + '<CreateTime>1348831860</CreateTime>'
  + '<MsgType><![CDATA[text]]></MsgType>'
  + '<Content><![CDATA[this is a test]]></Content>'
  + '<MsgId>1234567890123456</MsgId>'
  + '</xml>',

  image: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[fromUser]]></FromUserName>'
  + '<CreateTime>1348831860</CreateTime>'
  + '<MsgType><![CDATA[image]]></MsgType>'
  + '<PicUrl><![CDATA[this is a url]]></PicUrl>'
  + '<MediaId><![CDATA[media_id]]></MediaId>'
  + '<MsgId>1234567890123456</MsgId>'
  + '</xml>',

  voice: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[fromUser]]></FromUserName>'
  + '<CreateTime>1357290913</CreateTime>'
  + '<MsgType><![CDATA[voice]]></MsgType>'
  + '<MediaId><![CDATA[media_id]]></MediaId>'
  + '<Format><![CDATA[Format]]></Format>'
  + '<MsgId>1234567890123456</MsgId>'
  + '</xml>',

  video: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[fromUser]]></FromUserName>'
  + '<CreateTime>1357290913</CreateTime>'
  + '<MsgType><![CDATA[video]]></MsgType>'
  + '<MediaId><![CDATA[media_id]]></MediaId>'
  + '<ThumbMediaId><![CDATA[thumb_media_id]]></ThumbMediaId>'
  + '<MsgId>1234567890123456</MsgId>'
  + '</xml>',

  location: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[fromUser]]></FromUserName>'
  + '<CreateTime>1351776360</CreateTime>'
  + '<MsgType><![CDATA[location]]></MsgType>'
  + '<Location_X>23.134521</Location_X>'
  + '<Location_Y>113.358803</Location_Y>'
  + '<Scale>20</Scale>'
  + '<Label><![CDATA[位置信息]]></Label>'
  + '<MsgId>1234567890123456</MsgId>'
  + '</xml>',

  link: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[fromUser]]></FromUserName>'
  + '<CreateTime>1351776360</CreateTime>'
  + '<MsgType><![CDATA[link]]></MsgType>'
  + '<Title><![CDATA[公众平台官网链接]]></Title>'
  + '<Description><![CDATA[公众平台官网链接]]></Description>'
  + '<Url><![CDATA[url]]></Url>'
  + '<MsgId>1234567890123456</MsgId>'
  + '</xml>',

  subscribe: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[FromUser]]></FromUserName>'
  + '<CreateTime>123456789</CreateTime>'
  + '<MsgType><![CDATA[event]]></MsgType>'
  + '<Event><![CDATA[subscribe]]></Event>'
  + '</xml>',

  subscribeWithQrcode: '<xml><ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[FromUser]]></FromUserName>'
  + '<CreateTime>123456789</CreateTime>'
  + '<MsgType><![CDATA[event]]></MsgType>'
  + '<Event><![CDATA[subscribe]]></Event>'
  + '<EventKey><![CDATA[qrscene_123123]]></EventKey>'
  + '<Ticket><![CDATA[TICKET]]></Ticket>'
  + '</xml>',

  SCAN: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[FromUser]]></FromUserName>'
  + '<CreateTime>123456789</CreateTime>'
  + '<MsgType><![CDATA[event]]></MsgType>'
  + '<Event><![CDATA[SCAN]]></Event>'
  + '<EventKey><![CDATA[SCENE_VALUE]]></EventKey>'
  + '<Ticket><![CDATA[TICKET]]></Ticket>'
  + '</xml>',

  LOCATION: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[fromUser]]></FromUserName>'
  + '<CreateTime>123456789</CreateTime>'
  + '<MsgType><![CDATA[event]]></MsgType>'
  + '<Event><![CDATA[LOCATION]]></Event>'
  + '<Latitude>23.137466</Latitude>'
  + '<Longitude>113.352425</Longitude>'
  + '<Precision>119.385040</Precision>'
  + '</xml>',

  CLICK: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[FromUser]]></FromUserName>'
  + '<CreateTime>123456789</CreateTime>'
  + '<MsgType><![CDATA[event]]></MsgType>'
  + '<Event><![CDATA[CLICK]]></Event>'
  + '<EventKey><![CDATA[EVENTKEY]]></EventKey>'
  + '</xml>',

  VIEW: '<xml>'
  + '<ToUserName><![CDATA[toUser]]></ToUserName>'
  + '<FromUserName><![CDATA[FromUser]]></FromUserName>'
  + '<CreateTime>123456789</CreateTime>'
  + '<MsgType><![CDATA[event]]></MsgType>'
  + '<Event><![CDATA[VIEW]]></Event>'
  + '<EventKey><![CDATA[www.qq.com]]></EventKey>'
  + '</xml>',

  MASSSENDJOBFINISH: '<xml>'
  + '<ToUserName><![CDATA[gh_3e8adccde292]]></ToUserName>'
  + '<FromUserName><![CDATA[oR5Gjjl_eiZoUpGozMo7dbBJ362A]]></FromUserName>'
  + '<CreateTime>1394524295</CreateTime>'
  + '<MsgType><![CDATA[event]]></MsgType>'
  + '<Event><![CDATA[MASSSENDJOBFINISH]]></Event>'
  + '<MsgID>1988</MsgID>'
  + '<Status><![CDATA[sendsuccess]]></Status>'
  + '<TotalCount>100</TotalCount>'
  + '<FilterCount>80</FilterCount>'
  + '<SentCount>75</SentCount>'
  + '<ErrorCount>5</ErrorCount>'
  + '</xml>'
};