const mogoose = require("mongoose");

const schema = new mogoose.Schema(
  {
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: String,
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class AuditLogs extends mongoose.Model {}

SchemaType.loadclass(AuditLogs);
model.exports = mongoose.model("audit_logs", schema);
