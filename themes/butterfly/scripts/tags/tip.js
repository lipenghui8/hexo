/**
 * Butterfly
 * Tip
 */

'use strict'

const url_for = require('hexo-util').url_for.bind(hexo)

function tip (args) {
  let tag = args[0].trim();
  let content = args[1].trim();
  return `<div class="tip ${tag}"><p>${content}</p>
          </div>`
}

function tiprun(args) {
  let tag0 = args[0].trim();
  let tag1 = args[1].trim();
  let content = args[2].trim();
  return `<div class="tip ${tag0} ${tag1} animated"><p>${content}</p>
          </div>`
}

hexo.extend.tag.register('tip', tip)
hexo.extend.tag.register('tiprun', tiprun)
