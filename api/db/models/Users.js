const mogoose = require('mongoose');

const schema = new mogoose.Schema({
    email: {type : String, required: true},
    password: {type : String, required: true},
    is_active: {type: Boolean, default: true},
    first_name: String,
    last_name: String,
    phone_number: String,
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


class Users extends mongoose.Model{

}

SchemaType.loadclass(Users);
model.exports = mongoose.model('users', schema);