({
    appDir: "static",
    baseUrl: "js",
    dir: "static-compiled",
    modules: [
        {
            name: "common",
            include: ["jquery",
                        "backbone",
                        "bootstrap",
                        "text",
                        "underscore"]
        },

        {
            name: "main",
            exclude: ["common"]
        }
    ],
    mainConfigFile: 'static/js/common.js'
})