const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestsSchema = new Schema(
  {
    rescuer: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Rescuer",
    },
    team_member: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description: String,
    rest: {
      geometry: {
        type: {
          type: String,
          enum: ["Point"],
          required: true,
        },
        coordinates: {
          type: [Number],
          required: true,
        },
      },
      capacity: {
        type: Number,
      },
      services: [
        {
          type: [String],
          enum: [
            "counseling",
            "food and water",
            "language assistance",
            "medical care",
            "transportation",
          ],
        },
      ],
      specialization: [
        {
          type: [String],
          enum: [
            "fire response",
            "medical",
            "mental health support",
            "search and rescue",
            "water rescue",
          ],
        },
      ],
      medical_facility: [
        {
          type: [String],
          enum: [
            "basic first aid",
            "intensive care units",
            "pediatric care",
            "surgical facilities",
            "trauma care",
          ],
        },
      ],
      supply_and_resource: [
        {
          type: [String],
          enum: [
            "limited supplies",
            "medical equipment available",
            "pharmaceuticals available",
            "well-stocked",
          ],
        },
      ],
      calamities: [
        {
          type: [String],
          enum: [
            "earthquake",
            "fire",
            "flood",
            "hurricane",
            "pandemic",
            "tsunami",
          ],
        },
      ],
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "resolved"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Requests", RequestsSchema);
