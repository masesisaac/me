const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/masesisaac/me/Portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/masesisaac/me/Portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/masesisaac/me/Portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/masesisaac/me/Portfolio/src/pages/projects.js"))),
  "component---src-pages-uses-js": hot(preferDefault(require("/Users/masesisaac/me/Portfolio/src/pages/uses.js")))
}

