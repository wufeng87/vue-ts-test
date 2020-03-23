const useCustom = false;

const path = require("path");

module.exports = useCustom
  ? require(path.join(__dirname, "custom_modify_var"))
  : {};
