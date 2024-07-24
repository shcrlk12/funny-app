module.exports = {
  presets: ['@babel/env', 'module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@images': './src/assets/images',
          '@style': './src/style',
          '@pages': './src/pages',
          '@reducers': './src/reducers',
          '@config': './src/configs',
          '@src': './src',
        },
      },
    ],
  ],
};
