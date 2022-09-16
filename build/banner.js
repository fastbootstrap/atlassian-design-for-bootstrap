'use strict'

const pkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner() {
  return `/*!
  * FastBootstrap v${pkg.version} (${pkg.homepage})
  * Copyright 2022-${year} ${pkg.author}
  * Licensed under MIT (https://github.com/fastbootstrap/atlassian-design-for-bootstrap/blob/main/LICENSE)
  * 
  * Bootstrap v5.2.1 (https://getbootstrap.com/)
  * Copyright 2011-${year} The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */`
}

module.exports = getBanner