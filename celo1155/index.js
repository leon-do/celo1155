require("dotenv").config();
const balanceOf = require("./balanceOf");
const deploy = require("./deploy");
const mint = require("./mint");
const safeTransferFrom = require("./safeTransferFrom");

module.exports = { balanceOf, deploy, mint, safeTransferFrom };
