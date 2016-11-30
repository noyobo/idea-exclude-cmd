#!/usr/bin/env node

const utils = require('../utils/');
const log = utils.log;
const ideaDir = utils.findDotIdea(process.cwd());

if (ideaDir == null) {
  log.warn('Can not find .idea directory!');
  process.exit(0);
}


log.info('.idea:', ideaDir);

const argv = require('argv');
