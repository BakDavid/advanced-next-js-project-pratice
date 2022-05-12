import mongoose from "mongoose";

/* MeetupSchema will correspond to a collection in your MongoDB database. */
const MeetupSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "Please provide an image."],
  },
  title: {
    type: String,
    required: [true, "Please provide the title"],
  },
  address: {
    type: String,
    required: [true, "Please specify the address."],
  },
  description: {
    type: String,
    required: [true, "Please specify the description."],
  },
});

export default mongoose.models.Meetup || mongoose.model("Meetup", MeetupSchema);
