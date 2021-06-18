#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');

function help() {
  console.log(`Usage
  cls-snippet --add`);
}
function main(conf = { path: '' }) {
  let { path } = conf;

  exec(`node ${path}/build/snippet.js`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

let packageName = `@tencent/weadmin-components-bizadmin`;
const cmds = {
  '--add': () => {
    // note: npx 环境需要 process.cwd(), 找不到 process.env.INIT_CWD
    let componentPath = `${process.cwd().replace(/\\/g, '/')}/node_modules/${packageName}`;
    fs.access(componentPath, fs.constants.F_OK, err => {
      if (!err) {
        main({ path: componentPath });
      } else {
        console.log('wecomponent 不存在。请执行 tnpm i @tencent/weadmin-components-bizadmin');
      }
    });
  },
};
const [, , cmd, ...args] = process.argv;
cmds[cmd] ? cmds[cmd](...args) : help();
