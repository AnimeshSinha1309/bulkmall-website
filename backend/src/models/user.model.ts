import mongoose, { Schema } from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    type: String,
    gender: String,
    ratings: [Number]
  },
  { versionKey: false }
);

UserSchema.set('toJSON', {
  transform: function (doc: any, ret: any, options: any) {
    ret.id = ret._id;
    delete ret._id;
  }
});

export const User = mongoose.model('User', UserSchema);
