#!/usr/bin/env node

const sh = require('shelljs');
const chalk = require('chalk');

const locDir = 'src/app/pages';
const boilerDir = './internals/templates/pages/';

let val;
process.stdout.write(chalk.yellow('\nInput page module name: '));
process.stdin.on('data', data => {
  val = data.toString().trim();

  process.stdout.write(chalk.yellow('Creating pages module for ' + val + ''));
  sh.exec('cd ' + locDir + ' && mkdir ' + val);
  sh.exec('cd ' + locDir + '/' + val);

  sh.cat(boilerDir + 'pages-tests-template.js').to(
    './' + locDir + '/' + val + '/page.test.jsx',
  );
  sh.cat(boilerDir + 'pages-index-template.js').to(
    './' + locDir + '/' + val + '/index.js',
  );
  sh.cat(boilerDir + 'pages-page-template.js').to(
    './' + locDir + '/' + val + '/page.tsx',
  );

  process.stdout.write(chalk.yellow('\nCreated boilerplate pages.'));
  sh.exit();
});
