import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  url: {
    type: String,
    require: true,
  },
  modifiedUrl: {
    type: String,
    require: true,
  },
  uniqueCode: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
  },
});

const Url = mongoose.models.urls || mongoose.model("urls", UrlSchema);

export default Url;
