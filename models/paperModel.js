import mongoose, { Schema } from "mongoose";

const reqString = {
  type: String,
  required: true,
};

const paperSchema = mongoose.model({
  subject_id: {
    type: Schema.Types.ObjectId,
    ref: "Subject",
  },
  paper_type: reqString,
  paper_name: reqString,
  paper_code: reqString,
  college_id: {
    type: Schema.Types.ObjectId,
    ref: "College",
  },
  stream_id: {
    type: Schema.Types.ObjectId,
    ref: "Stream",
  },
});

var Paper = mongoose.model("Paper", paperSchema);

export default Paper;
