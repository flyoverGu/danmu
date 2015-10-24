var parseString = require('xml2js').parseString;
var camelCase = require('camelcase');
var md5 = require('MD5');

var defaultOpts = {
  camelcase: true,
  key: 'body',
  secret: undefined
};

module.exports = middleware;
module.exports.parse = parse;
module.exports.middleware = middleware;

function middleware(options) {
  var opts = resolveOpts(options);

  return function* (next) {
    var request = this.request;
    if (request._body) yield next;
    var method = request.method.toLowerCase();
    if (method !== 'post') yield next;
    var message = yield parse(this.req, opts);
    request._body = true;
    request[opts.key] = message || {};
    yield next;
  }
}

function parse(stream, options) {
  var opts = resolveOpts(options);
  return new Promise(function(resolve, reject) {
    if (stream._parsedWechat) {
      resolve(stream._parsedWechat);
    }
    var chunks = [];
    var size = 0;
    stream.on('data', function(chunk) {
      chunks.push(chunk);
      size += chunk.length;
    });
    stream.on('end', function() {
      var buf = Buffer.concat(chunks, size);
      resolve(buf.toString());
    });
    stream.once('error', reject);
  }).then(function(xml) {
      return new Promise(function(resolve, reject) {
        parseString(xml, function(error, data) {
          if (error) return reject(error);
          try {
            data = normalize(data);

            if (opts.secret && !validateSign(data, opts.secret)) {
              return reject('invalid signature');
            }

            if (opts.camelcase) {
              data = camelizeKeys(data);
            }
          } catch (error) {
            return reject(error);
          }
          stream._parsedWechat = data;
          resolve(data);
        });
      });
    });
}

function normalize(data) {
  var result = {};
  Object.keys(data.xml).forEach(function(xmlKey) {
    var value = data.xml[xmlKey][0].trim();
    result[xmlKey] = isEmpty(value) ? '' : value;
  });
  return result;
}

function validateSign(data, secret) {
  var urlEncoded = Object.keys(data).sort().filter(function(key) {
    return key !== 'sign';
  }).map(function (key) {
    return key + '=' + data[key];
  }).join('&');
  return md5(urlEncoded + '&key=' + secret).toUpperCase() === data.sign;
}

function camelizeKeys(data) {
  var result = {};
  Object.keys(data).forEach(function(key) {
    var value = data[key];
    var camelizedKey = camelCase(key);
    result[camelizedKey] = value;
  });
  return result;
}

function resolveOpts(options) {
  var opts = options || {};
  var result = {};
  result.camelcase = (typeof opts.camelcase === 'boolean') ? opts.camelcase : defaultOpts.camelcase;
  result.key = (typeof opts.key === 'string') ? opts.key : defaultOpts.key;
  result.secret = (typeof opts.secret === 'string') ? opts.secret : defaultOpts.secret;
  return result;
}

function isEmpty(value) {
  if (!value) return true;
  return typeof value === 'object' && !Object.keys(value).length;
}
