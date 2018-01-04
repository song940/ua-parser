## nagent [![nagent](https://img.shields.io/npm/v/nagent.svg)](https://npmjs.org/nagent)

> 

### Installation

```bash
$ npm install nagent
```

### Example

```js
const UserAgent = require('nagent');

const ua = UserAgent.parse('Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13D15 MicroMessenger/6.3.9 NetType/WIFI Language/zh_CN');

// [
//   {
//     "ProductName": "Mozilla",
//     "ProductVersion": "5.0",
//     "SystemInformation": {
//       "Platform": "iPhone",
//       "ReleaseVersion": "CPU iPhone OS 11_0_3 like Mac OS X",
//       "_": []
//     }
//   },
//   {
//     "PlatformName": "AppleWebKit",
//     "PlatformVersion": "604.1.38",
//     "PlatformDetail": "KHTML, like Gecko"
//   },
//   {
//     "PlatformName": "Mobile",
//     "PlatformVersion": "15A432"
//   },
//   {
//     "PlatformName": "Nebula"
//   },
//   {
//     "PlatformName": "PSDType",
//     "PlatformDetail": "1"
//   },
//   {
//     "PlatformName": "AlipayDefined",
//     "PlatformDetail": "nt:WIFI,ws:320|504|2.0"
//   },
//   {
//     "PlatformName": "AliApp",
//     "PlatformDetail": "AP/10.1.5.102407"
//   },
//   {
//     "PlatformName": "AlipayClient",
//     "PlatformVersion": "10.1.5.102407"
//   },
//   {
//     "PlatformName": "Alipay"
//   },
//   {
//     "PlatformName": "Language",
//     "PlatformVersion": "en"
//   }
// ]


```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### ISC

This work is licensed under the [ISC license](./LICENSE).

---