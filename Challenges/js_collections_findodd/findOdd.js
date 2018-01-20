// BEGIN
/* eslint no-bitwise: ["error", { "allow": ["^"] }] */
export default arr => arr.reduce((acc, num) => acc ^ num, 0);
// END
