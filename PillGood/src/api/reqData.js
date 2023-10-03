const searchPillNameData = require('./searchPillNameData')

async function someFunction(name) {
  const data = await searchPillNameData(name);
  console.log(data.body);
}

someFunction("타이레놀");