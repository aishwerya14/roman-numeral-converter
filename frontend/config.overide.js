const webpack = require("webpack");

module.exports = function override(config, env) {
    config.resolve.fallback = {
        os: require.resolve("os-browserify/browser"),
        path: require.resolve("path-browserify"),
        zlib: require.resolve("browserify-zlib"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
    };
    return config;
};