// BEGIN
export default pairs =>
  pairs.reduce((acc, [key, value]) => ({ [key]: value, ...acc }), {});
// END
