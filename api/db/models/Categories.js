const mogoose = require("mongoose");

const schema = new mogoose.Schema(
  {
    is_active: { type: Boolean, default: true },
    created_by: {
      type: mogoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class Categories extends mongoose.Model {}

SchemaType.loadclass(Categories);
model.exports = mongoose.model("categories", schema);
