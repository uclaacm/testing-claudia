exports.handler = function (event, context) {
  console.log(event);
  context.succeed(`Yo what's up: ${event['name']}`);
};
