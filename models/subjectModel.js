import mongoose, { Schema } from "mongoose";

const reqString = {
  type: String,
  required: true,
};

const subjectSchema = mongoose.model({
  stream_id: {
    type: Schema.Types.ObjectId,
    ref: "Stream",
  },
  subject_name: reqString,
  college_id: {
    type: Schema.Types.ObjectId,
    ref: "College",
  },
});

var Subject = mongoose.model("Subject", subjectSchema);

export default Subject;
