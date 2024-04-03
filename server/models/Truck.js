import mongoose from "mongoose";

const Schema = mongoose.Schema;

const truckSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  imagePath: {
    type: [String],
    required: true,
  },
  liftingCapacity: Number,
  liftingHeight: [Number],
  engine: {
    type: String,
    model: String
  },
  description: {
    type: String,
    required: true,
  },
  cabin: {
    material: String,
    doors: Number,
    seatingCapacity: Number,
    heating: Boolean
  },
  transmission: {
    type: String,
    speeds: Number
  },
  tires: {
    front: {
      size: String,
      model: String
    },
    rear: {
      size: String,
      model: String
    }
  },
  features: [String],
  dimensions: {
    lengthWithoutAttachment: Number,
    lengthWithAttachment: Number,
    height: Number,
    base: Number,
    trackWidth: {
      front: Number,
      rear: Number
    }
  },
  weight: Number,
  maximumSpeed: Number,
  gradeability: Number,
  turningRadius: Number,
  clearance: Number,
  tiltAngles: {
    forward: String,
    backward: String
  },
  attachments: [String],
  manufacturingDetails: String,
  brakes: {
    working: String,
    parking: String
  },
  availability: {
    type: Boolean,
    required: true,
  },
});
const Truck = mongoose.model("Truck", truckSchema);
export default  Truck;
