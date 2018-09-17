const presets = [
  [
    "@babel/env"
  ],
  [ "@babel/react" ]
];

module.exports = {
  presets,
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties"
  ]
};
