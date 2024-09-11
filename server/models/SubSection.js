// const mongoose = require("mongoose");

// const SubSectionSchema = new mongoose.Schema({
// 	title: { type: String },
// 	timeDuration: { type: String },
// 	description: { type: String },
// 	videoUrl: { type: String },
// });

// module.exports = mongoose.model("SubSection", SubSectionSchema);

const mongoose = require("mongoose");

const SubSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  timeDuration: { type: String },
  description: { type: String },
  videoUrl: { type: String },
});

// Use the existing model if it has already been compiled, otherwise create a new one
const SubSection = mongoose.models.SubSection || mongoose.model("SubSection", SubSectionSchema);

module.exports = SubSection;
