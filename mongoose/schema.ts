import mongoose from 'mongoose';

// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    createdCourses:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: String,
    imageLink: String,
    published: String
  });

export const User = mongoose.model('User', userSchema);
export const Admin = mongoose.model('Admin', adminSchema);
export const Course = mongoose.model('Course', courseSchema);
  
