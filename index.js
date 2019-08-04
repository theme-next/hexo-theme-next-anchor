/* global hexo */

'use strict';

const path = require("path");
const cheerio = require("cheerio");

hexo.extend.filter.register('after_post_render', data => {
  const theme = hexo.theme.config;
  // Exit if `anchor` option disable in NexT.
  if (!theme.anchor.enable) return;

  const $ = cheerio.load(data.content, { decodeEntities: false });
  const headings = $('h1, h2, h3, h4, h5, h6');
  if (!headings.length) return;

  const position = theme.anchor.position;

  Array.from(headings).forEach(x => {
    let id = $(x).attr('id');
    let p = $(x).addClass('heading-control');
    if (position === 'left') {
      p.prepend('<a class="heading-anchor" href="#' + id + '" aria-hidden="true"></a>');
    } else if (position === 'right') {
      p.append('<a class="heading-anchor" href="#' + id + '" aria-hidden="true"></a>');
    } 
  });

  data.content = $.html();
});

hexo.extend.filter.register('theme_inject', injects => {
  injects.style.push(path.join(__dirname, 'anchor.styl'));
});
