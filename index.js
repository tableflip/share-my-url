var qs = require('querystring')

module.exports = function (network, url, opts) {

  opts = opts || {}

  if (!linkfor[network]) throw new Error('Unsupported network ' + network)
  return linkfor[network](url, opts)

}

var linkfor = {
  facebook: function (url, opts) {
    var share = {
      u: url
    }
    if (opts.t) share.t = opts.t
    return 'https://www.facebook.com/sharer/sharer.php?' + qs.stringify(share)
  },
  googleplus: function (url, opts) {
    var share = {
      url: url
    }
    return 'https://plus.google.com/share?' + qs.stringify(share)
  },
  pinterest: function (url, opts) {
    var share = {
      url: url
    }
    if (opts.media) share.media = opts.media
    if (opts.description) share.description = opts.description
    return 'http://pinterest.com/pin/create/button/?' + qs.stringify(share)
  },
  twitter: function (url, opts) {
    var share = {
      source: url
    }
    if (opts.text) share.text = opts.text
    if (opts.via) share.via = opts.via
    return 'https://twitter.com/intent/tweet?' + qs.stringify(share)
  }
}

linkfor['google+'] = linkfor.googleplus
