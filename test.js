var test = require('tape')
var share = require('./')
var urlParse = require('url').parse

test('the function throws', function (t) {
  t.plan(1)
  t.throws(function () {share('hoola')}, 'if called with unsupported network')
  t.end()
})
test('facebook link', function (t) {
  t.plan(3)
  var myLink = 'https://nodejs.org'
  var myTitle = 'test title'
  var url = share('facebook', myLink, {t: myTitle})
  var urlParsed = urlParse(url, true, true)

  t.equal(urlParsed.query.u, myLink, 'url is added to the facebook url')
  t.equal(urlParsed.query.t, myTitle, 't (title) is added to the facebook url')
  t.notEqual(urlParsed.hostname.indexOf('facebook.com'), -1)
  console.log('facebook', url)
  t.end()
})
test('google link', function (t) {
  t.plan(2)
  var myLink = 'https://nodejs.org'
  var url = share('googleplus', myLink)
  var urlParsed = urlParse(url, true, true)

  t.equal(urlParsed.query.url, myLink, 'url is added to the google url')
  t.notEqual(urlParsed.hostname.indexOf('google.com'), -1)
  console.log('googleplus', url)
  t.end()
})
test('twitter link', function (t) {
  t.plan(4)
  var myLink = 'https://nodejs.org'
  var myTitle = 'test title'
  var myHandle = 'testTwitter'
  var url = share('twitter', myLink, {text: myTitle, via: myHandle})
  var urlParsed = urlParse(url, true, true)

  t.equal(urlParsed.query.source, myLink, 'source is added to the twitter url')
  t.equal(urlParsed.query.text, myTitle, 'title is added to the twitter url')
  t.equal(urlParsed.query.via, myHandle, 'testTwitter handle is added to the twitter url')
  t.notEqual(urlParsed.hostname.indexOf('twitter.com'), -1)
  console.log('twitter', url)
  t.end()
})
test('pinterest link', function (t) {
  t.plan(4)
  var myLink = 'https://nodejs.org'
  var myDescription = 'test title'
  var myMedia = 'https://cdn.tutsplus.com/net/uploads/legacy/404_regularExpressions/images/url.jpg'
  var url = share('pinterest', myLink, {description: myDescription, media: myMedia})
  var urlParsed = urlParse(url, true, true)

  t.equal(urlParsed.query.url, myLink, 'source is added to the twitter url')
  t.equal(urlParsed.query.description, myDescription, 'title is added to the twitter url')
  t.equal(urlParsed.query.media, myMedia, 'handle is added to the twitter url')
  t.notEqual(urlParsed.hostname.indexOf('pinterest.com'), -1)
  console.log('pinterest', url)
  t.end()
})
