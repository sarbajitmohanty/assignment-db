import mongoose, { Schema } from "mongoose";

const reqString = {
  type: String,
  required: true,
};

const topicSchema = mongoose.model({
  paper_id: {
    type: Schema.Types.ObjectId,
    ref: "Paper",
  },
  topic_name: reqString,
  topic_code: reqString,
  college_id: {
    type: Schema.Types.ObjectId,
    ref: "College",
  },
  stream_id: {
    type: Schema.Types.ObjectId,
    ref: "Stream",
  },
  subject_id: {
    type: Schema.Types.ObjectId,
    ref: "Subject",
  },
});

var Topic = mongoose.model("Topic", topicSchema);

export default Topic;
