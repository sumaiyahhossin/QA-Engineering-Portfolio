const http = require('node:http');

const members = new Map([
  ['MEM-1001', { memberId: 'MEM-1001', eligible: true }],
]);
const plans = [
  { id: 'PLAN-101', type: 'HMO', name: 'Sample HMO' },
  { id: 'PLAN-202', type: 'PPO', name: 'Sample PPO' },
];

function sendJson(response, status, body) {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(body));
}

function sendMember(response, memberId) {
  const member = members.get(memberId);
  return member
    ? sendJson(response, 200, member)
    : sendJson(response, 404, { error: 'Member not found' });
}

async function selectPlan(request, response) {
  let payload;
  try {
    request.setEncoding('utf8');
    let raw = '';
    for await (const chunk of request) raw += chunk;
    payload = JSON.parse(raw);
  } catch {
    return sendJson(response, 400, { error: 'Invalid JSON' });
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return sendJson(response, 400, { error: 'Request body must be a JSON object' });
  }
  if (!plans.some((plan) => plan.id === payload.planId)) {
    return sendJson(response, 400, { error: 'Unknown plan' });
  }
  return sendJson(response, 200, { selected: payload.planId });
}

const server = http.createServer((request, response) => {
  const { pathname, searchParams } = new URL(request.url, 'http://localhost');

  if (request.method === 'GET' && pathname.startsWith('/members/')) {
    let memberId;
    try {
      memberId = decodeURIComponent(pathname.slice('/members/'.length));
    } catch {
      return sendJson(response, 400, { error: 'Invalid member ID' });
    }
    return sendMember(response, memberId);
  }
  if (request.method === 'GET' && pathname === '/plans') {
    const type = searchParams.get('type');
    const results = type === null ? plans : plans.filter((plan) => plan.type === type);
    return sendJson(response, 200, { plans: results });
  }
  if (request.method === 'GET' && pathname === '/eligibility') {
    const memberId = searchParams.get('memberId');
    if (!memberId) return sendJson(response, 400, { error: 'Member ID is required' });
    return sendMember(response, memberId);
  }
  if (request.method === 'POST' && pathname === '/selection') {
    return selectPlan(request, response);
  }
  return sendJson(response, 404, { error: 'Route not found' });
});

server.listen(3100, '127.0.0.1', () => {
  console.log('Demo API listening on http://127.0.0.1:3100');
});
