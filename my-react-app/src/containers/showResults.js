import TensorModel from "./TensorModel"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  //await sleep(500);
  console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);

  let inputData = [];
  inputData.push(values);

  TensorModel(inputData);
});
