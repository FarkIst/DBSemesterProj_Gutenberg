#!/usr/bin/env node

const sh = require('shelljs');
const chalk = require('chalk');

const locDir = 'src/app/units';
const boilerDir = './internals/templates/units/';

let val;
process.stdout.write(chalk.yellow('\nInput unit module name: '));
process.stdin.on('data', data => {
  val = data.toString().trim();

  process.stdout.write(chalk.yellow('Creating unit module for ' + val + ''));
  sh.exec('cd ' + locDir + ' && mkdir ' + val);

  sh.cat(boilerDir + 'units-app-template.js').to(
    './' + locDir + '/' + val + '/App.jsx',
  );
  sh.cat(boilerDir + 'units-index-template.js').to(
    './' + locDir + '/' + val + '/index.js',
  );
  sh.cat(boilerDir + 'units-connect-template.js').to(
    './' + locDir + '/' + val + '/ConnectedApp.js',
  );
  sh.cat(boilerDir + 'units-test-template.js').to(
    './' + locDir + '/' + val + '/tests.js',
  );

  process.stdout.write(chalk.yellow('\nCreated boilerplate units.'));
  sh.exit();
});
