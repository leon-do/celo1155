const balanceOf = require("./balanceOf");
const deploy = require("./deploy");
const mint = require("./mint");
const safeTransferFrom = require("./safeTransferFrom");
const network = require('./network')
const privateKey = require('./privateKey')

module.exports = { balanceOf, deploy, mint, safeTransferFrom, network, privateKey };
