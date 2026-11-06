const http = require('node:http');
const members = {'MEM-1001': {memberId:'MEM-1001',eligible:true}};
const plans = [{id:'PLAN-101',type:'HMO',name:'Sample HMO'},{id:'PLAN-202',type:'PPO',name:'Sample PPO'}];
const server = http.createServer((req,res)=>{
 const u = new URL(req.url,'http://localhost'); let status=200, data;
 const send=()=>{res.writeHead(status,{'Content-Type':'application/json'});res.end(JSON.stringify(data));};
 if(req.method==='GET' && u.pathname.startsWith('/members/')) {data=members[decodeURIComponent(u.pathname.slice(9))];if(!data){status=404;data={error:'Member not found'};}return send();}
 if(req.method==='GET' && u.pathname==='/plans'){data={plans:plans.filter(p=>!u.searchParams.has('type')||p.type===u.searchParams.get('type'))};return send();}
 if(req.method==='GET' && u.pathname==='/eligibility'){const id=u.searchParams.get('memberId');if(!id){status=400;data={error:'Member ID is required'};}else if(!members[id]){status=404;data={error:'Member not found'};}else{data=members[id];}return send();}
 if(req.method==='POST' && u.pathname==='/selection'){let raw='';req.on('data',c=>raw+=c);req.on('end',()=>{let payload;try{payload=JSON.parse(raw);}catch{status=400;data={error:'Invalid JSON'};return send();}if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
  status = 400;
  data = {error: 'Request body must be a JSON object'};
  return send();
 }
 if(!plans.some(p=>p.id===payload.planId)){status=400;data={error:'Unknown plan'};}else{data={selected:payload.planId};}send();});return;}
 status=404;data={error:'Route not found'};send();
});
server.listen(3100,'127.0.0.1',()=>console.log('Demo API listening on 127.0.0.1:3100'));
