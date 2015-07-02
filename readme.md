# Share my URL

get it like this

`npm install share-my-url`

then add it like this

```
var share = require('share-my-url')

share('facebook', 'https://github.com/tableflip/share-my-url')

// https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Ftableflip%2Fshare-my-url
```
Here are the supported networks

![facebook twitter pinterest google+](https://cloud.githubusercontent.com/assets/4499581/8482024/b8f568da-20de-11e5-8c24-2531e7c6ee4f.jpg)

They take different options listed below
```
facebook {
  t: 'some title'
}

pinterest {
  media: 'some link to an image',
  description: 'some description for your shareble thing'
}

twitter {
  via: 'a twitter handle',
  text: 'a tweet you want to share'
}
```
## Tests

Tests are in tape, and code is linted by standard.

```
npm test
```
