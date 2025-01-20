const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const schema = new mogoose.Schema(
  {
    role_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    permission: { type: String, required: true },
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

class RolePrivileges extends mongoose.Model {}

SchemaType.loadclass(RolePrivileges);
model.exports = mongoose.model("role_privileges", schema);
