const parseUA = require('./lib/parser');
/**
 * UserAgent
 * @param {*} options
 * @wiki https://en.wikipedia.org/wiki/User_agent
 */
function UserAgent(options){
  if(!(this instanceof UserAgent))
    return new UserAgent(options);
  this.options = options;
  return this;
}

/**
 * UserAgent Parser
 */
UserAgent.parse = parseUA;

module.exports = UserAgent;