# hexo-theme-next-anchor

[![travis-image]][travis-url]
[![hexo-image]][hexo-url]
[![npm-image]][npm-url]
[![lic-image]](LICENSE)

A NexT plugin that adds an anchor to every heading.

## Installation

![size-image]
[![dm-image]][npm-url]
[![dt-image]][npm-url]

Go to your Hexo root directory, then run this command:

```bash
npm i hexo-theme-next-anchor
```

## Usage

> You need to write following options into your NexT configuration file.

```yml
anchor:
  enable: true
  color: '#0e83cd'
  position: right # If left, anchors will always be visible.
  margin: 7px 
  text: '#'
  icon:
    # If true, the `text` option will be ignored.
    enable: false 
    # By default, NexT has built-in FontAwesome support.
    # This option means `font-family: FontAwesome`, so DO Not change it.
    # Also you can choose ForkAwesome, but that's another story.
    font: FontAwesome
    content: \f0c1 # CSS content for FontAwesome & ForkAwesome.
```

## Thanks

This plugin was modified from [Hexo Site](https://github.com/hexojs/site/blob/e7b12f2f3da2f8f43618e6994668a77bb1ba14d2/scripts/helpers.js#L104-L119).

[travis-image]: https://img.shields.io/travis/com/theme-next/hexo-theme-next-anchor?style=flat-square
[hexo-image]: https://img.shields.io/badge/hexo-%3E%3D%203.0-blue?style=flat-square
[npm-image]: https://img.shields.io/npm/v/hexo-theme-next-anchor?style=flat-square
[lic-image]: https://img.shields.io/npm/l/hexo-theme-next-anchor?style=flat-square

[size-image]: https://img.shields.io/github/languages/code-size/theme-next/hexo-theme-next-anchor?style=flat-square
[dm-image]: https://img.shields.io/npm/dm/hexo-theme-next-anchor?style=flat-square
[dt-image]: https://img.shields.io/npm/dt/hexo-theme-next-anchor?style=flat-square

[travis-url]: https://travis-ci.org/theme-next/hexo-theme-next-anchor?branch=master
[hexo-url]: https://hexo.io
[npm-url]: https://www.npmjs.com/package/hexo-theme-next-anchor
