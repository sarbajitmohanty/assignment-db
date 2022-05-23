import mongoose, { Schema } from "mongoose";

const reqString = {
  type: String,
  required: true,
}

const streamSchema = mongoose.model({
  college_id: {
      type: Schema.Types.ObjectId,
      ref: "College"
  },
  stream_name: {
      type: String,
      required: true,
  }
});

var Stream = mongoose.model("Stream", streamSchema);

export default Stream;
