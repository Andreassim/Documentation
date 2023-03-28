const test = await fetch("http://www.boredapi.com/api/activity/");
const json = await test.json()

console.log(json);