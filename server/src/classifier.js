const mobilenet = require("@tensorflow-models/mobilenet");
const tfnode = require("@tensorflow/tfjs-node");
const fs = require("fs");
const wiki = require("wikijs").default;

const readImage = (path) => {
  const imageBuffer = fs.readFileSync(path);
  const tfimage = tfnode.node.decodeImage(imageBuffer);
  return tfimage;
};

const separateText = (text) => {
  var t = text.split(",");
  var a = t.splice(0, 1).join(" ");
  console.log(a);
  return a;
};

const imageClassification = async (res, req) => {
  const image = readImage(path);
  const mobilenetModel = await mobilenet.load();
  const predictions = await mobilenetModel.classify(image);
  const searchString = separateText(predictions[0].className);
  const wikiresult = await (await wiki().find(searchString)).summary();
  console.log("Classification Results:", predictions);
  console.log(wikiresult);
};

module.exports = { imageClassification };
