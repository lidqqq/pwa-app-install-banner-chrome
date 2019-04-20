const { hostname } = require("os");

module.exports = {
  // remote(.now.sh) の場合は serverless
  target: hostname() !== "Iidqqq.local" ? "serverless" : "server"
};
