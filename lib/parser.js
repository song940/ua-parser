// docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
// rfcs: https://tools.ietf.org/html/rfc7231#section-5.5.3

const parseUA = userAgent => {
  // User-Agent: <product> / <product-version> <comment>
  return userAgent
  .match(/[^()\s]+(\s?\([^()]+\))?/g)
  .map((x, i) => i ? parsePlatform(x) : parseProduct(x));
};

const parseProduct = str => {
  const [ , Product, ,  sys ] = str.match(/^([^()\s]+)(\s?\(([^()]+)\))?/);
  // Mozilla/5.0 is the general token that says the browser is Mozilla compatible, 
  // and is common to almost every browser today.
  const [ ProductName, ProductVersion ] = Product.split('/');
  return {
    ProductName,
    ProductVersion,
    SystemInformation: parseSystemInformation(sys)
  };
};

const parseSystemInformation = sys => {
  if(!sys) return '';
  // platform describes the native platform the browser is running on (e.g. Windows, Mac, Linux or Android), 
  // and whether or not it's a mobile phone. Firefox OS phones simply say "Mobile"; the web is the platform. 
  // Note that platform can consist of multiple "; "-separated tokens. 
  const [ Platform, ReleaseVersion, ..._ ] = sys.split(/;\s?/g);
  return {
    Platform,
    ReleaseVersion,
    _
  };
};

const parsePlatform = str => {
  const [ , Platform, , PlatformDetail ] = str.match(/^([^()\s]+)(\s?\(([^()]+)\))?/);
  const [ PlatformName, PlatformVersion ] = Platform.split('/');
  return { PlatformName, PlatformVersion, PlatformDetail };
};

module.exports = parseUA;