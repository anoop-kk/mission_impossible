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
        },
        allowedInWindy:{
            type: Boolean,
            required: true,
        },
        allowedInRainy:{
            type: Boolean,
            required: true,
        },
        allowedInSunny:{
            type: Boolean,
            required: true,
        },
    }, {
    timestamps: true
})