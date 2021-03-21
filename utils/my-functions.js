const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const content = Faker.lorem.words(3)
  const due_hour = Faker.random.number({'min': 0,'max':23});
  const due_minutes = Faker.random.number({'min':0,'max':59, 'precision': 5})
  const due_string = `next ${Faker.date.weekday()} at ${due_hour}:${(due_minutes < 10) ? "0" + due_minutes : due_minutes}`;
 // add variables to virtual user's context:
  userContext.vars.content = content;
  userContext.vars.due_string = due_string;
  done();
}

module.exports = { generateRandomData }