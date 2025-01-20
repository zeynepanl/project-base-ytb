const mogoose = require('mongoose');

const schema = new mogoose.Schema({
    role_name: {type: String, required: true},
    is_active: {type: Boolean, default: true},
    created_by: {
        type: mogoose.Schema.Types.ObjectId,
        required: true,
    }
},{
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


class Roles extends mongoose.Model{

}

SchemaType.loadclass(Roles);
model.exports = mongoose.model('roles', schema);