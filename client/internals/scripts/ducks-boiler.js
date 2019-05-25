#!/usr/bin/env node

const sh = require('shelljs');
const chalk = require('chalk');

const locDir = 'src/app/state/ducks';
const boilerDir = './internals/templates/ducks/';

let val;
process.stdout.write(chalk.yellow('\nInput duck module name: '));
process.stdin.on('data', data => {
  val = data.toString().trim();

  process.stdout.write(chalk.yellow('Creating ducks module for ' + val + ''));
  sh.exec('cd ' + locDir + ' && mkdir ' + val);
  sh.cat(boilerDir + 'ducks-index-template.js').to('./' + locDir + '/' + val + '/index.js');
  sh.cat(boilerDir + 'ducks-actions-template.js').to('./' + locDir + '/' + val + '/actions.js');
  sh.cat(boilerDir + 'ducks-reducers-template.js').to('./' + locDir + '/' + val + '/reducers.js');
  sh.cat(boilerDir + 'ducks-sagas-template.js').to('./' + locDir + '/' + val + '/sagas.js');
  sh.cat(boilerDir + 'ducks-selectors-template.js').to('./' + locDir + '/' + val + '/selectors.js');
  sh.cat(boilerDir + 'ducks-services-template.js').to('./' + locDir + '/' + val + '/services.js');
  sh.cat(boilerDir + 'ducks-tests-template.js').to('./' + locDir + '/' + val + '/tests.js');
  process.stdout.write(chalk.yellow('\nCreated boilerplate duck.'));
  sh.exit();
});
