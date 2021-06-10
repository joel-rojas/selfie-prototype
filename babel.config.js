module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@assets": "./src/core/assets",
            "@components": "./src/core/components",
            "@hooks": "./src/core/hooks",
            "@models": "./src/core/models",
            "@styles": "./src/core/styles",
            "@screens": "./src/screens",
            "@store": "./src/store",
            "@utilities": "./src/core/utilities",
          },
        },
      ],
    ],
  };
};
