import { Schema } from 'mongoose';
export default new Schema({
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        distance: {
            type: Number,
            required: true,
            maxlength: 128
        },
        craters: {
            type: Number,
            required: true,
            maxlength: 128
        }
    }, {
    timestamps: true
})