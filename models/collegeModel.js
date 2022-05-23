import mongoose from "mongoose";

const reqString = {
  type: String,
  required: true,
}

const collegeSchema = mongoose.model({
  name: reqString,
  type: reqString,
  state: reqString,
  district: reqString,
  city: reqString,
});

var College = mongoose.model("College", collegeSchema);

export default College;
