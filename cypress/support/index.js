require('cypress-plugin-retries')
import './commands';
const customCommands = require('./commands');

export default on => {
  const commands = customCommands
}