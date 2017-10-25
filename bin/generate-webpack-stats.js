#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const webpackStats = require('../build/client/webpack-stats.json');

const initNewWebpackStats = () => {
  return {
    script: [],
    css: [],
  };
};

const getNewAssetPath = (assetPath, asset) => {
  if (assetPath === '') {
    return asset;
  }

  return assetPath + path.basename(asset);
};

// Main

let newWebpackStats = initNewWebpackStats();
const files = fs.readdirSync('config')
  // Take only regular files
  .filter(file => fs.lstatSync(path.resolve(__dirname, '../config/', file)).isFile())
  .filter(file => file !== 'custom-environment-variables.js');

for (const file of files) {
  const config = require(`../config/${file}`);
  const env = path.parse(file).name;
  const dest = `./build/client/webpack-stats.${env}.json`;
  let assetPath = '';

  if (config.appConfig && config.appConfig.ASSETS_PUBLIC_PATH) {
    assetPath = config.appConfig.ASSETS_PUBLIC_PATH;
  }
  for (const script of webpackStats.script) {
    newWebpackStats.script.push(getNewAssetPath(assetPath, script));
  }
  for (const style of webpackStats.css) {
    newWebpackStats.css.push(getNewAssetPath(assetPath, style));
  }

  fs.writeFileSync(dest, JSON.stringify(newWebpackStats));
  newWebpackStats = initNewWebpackStats();
  console.log(`${dest} generated.`)
}
