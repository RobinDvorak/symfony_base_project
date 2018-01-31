let Encore = require("@symfony/webpack-encore");

Encore
    .setOutputPath("public/build")
    .setPublicPath("/build")

    // empty the outputPath dir before each build
    //.cleanupOutputBeforeBuild()

    // will output as web/build/app.js
    .addEntry("backend.bundle", "./assets/js/backend/backend.js")
    .addEntry("frontend.bundle", "./assets/js/frontend/frontend.js")

    // will output as web/build/global.css
    .addStyleEntry("backend.styles", "./assets/scss/backend/backend.scss")
    .addStyleEntry("frontend.styles", "./assets/scss/frontend/frontend.scss")
    .enableSassLoader()
    .enablePostCssLoader()
    .autoProvidejQuery()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction());

module.exports = Encore.getWebpackConfig();