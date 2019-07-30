# hexo-theme-next-anchor

[![Npm Version](https://img.shields.io/npm/v/hexo-theme-next-anchor.svg?style=flat-square)](https://npmjs.org/package/hexo-theme-next-anchor)
[![Build status](https://img.shields.io/travis/com/1v9/hexo-theme-next-anchor.svg?style=flat-square)](https://travis-ci.com/1v9/hexo-theme-next-anchor)
[![License](https://img.shields.io/github/license/1v9/hexo-theme-next-anchor.svg?style=flat-square)](https://github.com/1v9/hexo-theme-next-anchor/blob/master/LICENSE)

A NexT plugin that adds an anchor to every heading.

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
