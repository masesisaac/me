module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"masesisaac-personal-portfolio","short_name":"Isaac's portfolio","start_url":"/","background_color":"#616CAA","theme_color":"#616CAA","display":"minimal-ui","icon":"src/images/code_logo.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
