const mobilenet = require("@tensorflow-models/mobilenet");
const tfnode = require("@tensorflow/tfjs-node");
const wiki = require("wikijs").default;


const imageClassification = async (req, res) => {

  
    const image = tfnode.node.decodeImage(req.file.buffer);
    const mobilenetModel = await mobilenet.load();
    const predictions = await mobilenetModel.classify(image);
    const searchString = separateText(predictions[0].className);
    const wikiresult = await (await wiki().find(searchString)).summary();
   
    res.status(200).send({status:"ok", predictions, wikiresult});
  };



const separateText = (text) => {
  var textSplited = text.split(",");
  var firstText = textSplited.splice(0, 1).join(" ");
  return firstText;
};


module.exports = { imageClassification };
