// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": [
    require('postcss-import'),
    require('postcss-url'),
    // to edit target browsers: use "browserslist" field in package.json
    require('autoprefixer')({
      browsers: [
        "> 1%",
        "last 3 versions",
        "not ie <= 8"
      ]
    })
  ]
}
