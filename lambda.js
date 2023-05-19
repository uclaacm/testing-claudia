exports.handler = function (event, context) {
  console.log(event);
  const name = event['name']
  context.succeed("Yo what's up: ", name);
};
