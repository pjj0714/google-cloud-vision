const vision = require("@google-cloud/vision");
require("dotenv").config();

const gcvFilter = async img => {
  const client = new vision.ImageAnnotatorClient();
  const nailCheck = /Care|Polish|Manicure/;
  const imgCheck = await client.labelDetection(img);
  const imageLabelAnnotations = imgCheck[0].labelAnnotations;

  let temp = "";
  imageLabelAnnotations.forEach(el => {
    if (el.score >= 0.9) {
      temp += el.description;
    }
  });
  // client
  //   .labelDetection(img)
  //   .then(results => {
  //     const result = results[0].labelAnnotations;
  //     console.log("test : ", result[0]);

  //     // console.log(`Label Annotations Result: ${JSON.stringify(result, null, 2)}`);
  //   })
  //   .catch(err => {
  //     console.error("ERROR:", err);
  //   });
};

gcvFilter(
  "https://scontent-icn1-1.cdninstagram.com/vp/f5b5315d7d00d524e3c662e564940b64/5D150B63/t51.2885-15/e35/51854181_412273626248985_5382004849831779759_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
);
