module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: ['@emotion/babel-plugin'],
          presets: [
            ['react-app', { flow: false, typescript: true }],
            require.resolve('@emotion/babel-preset-css-prop'),
          ],
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
