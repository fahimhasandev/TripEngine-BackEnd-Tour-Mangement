import { model, Schema } from "mongoose";
import { IAuthProvider, IsActive, IUser, Role } from "./user.interface";

const authProviderSchema = new Schema<IAuthProvider>({
    provider: { type: String, required: true },
    prodviderId: { type: String, required: true }
}, {
    versionKey: false,
    _id: false
});


const userSchema = new Schema<IUser>({
    name: {
        type: String, required: true
    },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, enum: Object.values(Role), default: Role.USER },
    phone: { type: String },
    picture: { type: String },
    address: { type: String },
    isActive: {
        type: String,
        emum: Object.values(IsActive),
        default: IsActive.ACTIVE
    },
    isVarifed: { type: String, required: false },
    auths: [authProviderSchema],
    // bookings: {type: String}
}, {
    timestamps: true,
    versionKey: false
});


const User = model<IUser>('User', userSchema);
export default User;