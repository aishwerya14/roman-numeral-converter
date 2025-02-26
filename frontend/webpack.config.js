const path = require("path");

module.exports = {
    resolve: {
        fallback: {
            "util": require.resolve("util/"),
            "os": require.resolve("os-browserify/browser"),
            "buffer": require.resolve("buffer/"),
            "path": require.resolve("path-browserify"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "fs": false // FS is not available in the browser, so we disable it
        },
    },
};
