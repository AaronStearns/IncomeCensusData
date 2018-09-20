import data from "../data.json"
import * as tf from '@tensorflow/tfjs';

console.log(data)


// const trainingData = tf.tensor2d(data.map(item => [
//   item.age, item.workclass, item.education, item.marital_status, item.occupation, item.relationship, item.race, item.sex, item.hours_per_week, item.native_country 
// ]))


// const outputData = tf.tensor2d(data.map(item => [
//   item.data == 1 ? 1 : 0,
//   item.data == 2 ? 1 : 0
// ]))


// const testingData = tf.tensor2d(values.map(item => [
//   item.age, item.workclass, item.education, item.marital_status, item.occupation, item.relationship, item.race, item.sex, item.hours_per_week, item.native_country 
// ]))

// const model = tf.sequential()

// model.add(tf.layers.dense({
//   inputShape: [10],
//   activation: "sigmoid",
//   units: 11,
// }))
// model.add(tf.layers.dense({
//   inputShape: [11],
//   activation: "sigmoid",
//   units: 2,
// }))
// model.add(tf.layers.dense({
//   activation: "sigmoid",
//   units: 2,
// }))
// model.compile({
//   loss: "meanSquaredError",
//   optimizer: tf.train.adam(.06),
// })

// const startTime = Date.now()
// model.fit(trainingData, outputData, {epochs: 50})
//   .then((history) => {
//     // console.log(history)
//     model.predict(testingData).print()
// })

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500);
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
