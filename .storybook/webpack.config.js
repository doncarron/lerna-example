const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [path.resolve(__dirname, "../packages")],
    loader: require.resolve("ts-loader")
  });
  
  defaultConfig.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: require.resolve("babel-loader")
  });
  
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};