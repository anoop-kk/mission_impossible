import { Schema } from 'mongoose';
export default new Schema({
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        speed: {
            type: Number,
            required: true,
            maxlength: 128
        },
        craterSpeed: {
            type: Number,
            required: true,
            maxlength: 128
        }
    }, {
    timestamps: true
})