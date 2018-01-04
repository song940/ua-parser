
const UserAgent = require('..');

const ua = UserAgent.parse('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_3 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Mobile/15A432 Nebula PSDType(1) AlipayDefined(nt:WIFI,ws:320|504|2.0) AliApp(AP/10.1.5.102407) AlipayClient/10.1.5.102407 Alipay Language/en');

console.log(JSON.stringify(ua, null, 2));