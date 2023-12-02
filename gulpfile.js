const {src, dist} = require('gulp')

const html = (cb) => {
return src('./src/html/index.html').pipe('./public')
}

exports.html = html