const {spawn} = require('node:child_process');
const server = spawn(process.execPath,['server.js'],{stdio:'inherit'});
let finished=false;
function stop(code){if(finished)return;finished=true;server.kill();process.exitCode=code;}
server.on('error',err=>{console.error(err);stop(1);});
setTimeout(()=>{
 if(finished)return;
 const test=spawn(process.execPath,['node_modules/newman/bin/newman.js','run','Healthcare_API.postman_collection.json','--bail'],{stdio:'inherit'});
 test.on('error',err=>{console.error(err);stop(1);});
 test.on('exit',code=>stop(code??1));
},800);
