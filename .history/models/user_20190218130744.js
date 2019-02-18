import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// creating a user Schema
const UserSchema = newSchema({
  role: {
    type: String,
    default: "Parent",
    required: [true, 'Rola użytkownika nie została wybrana']
  },
  parent: {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    }
  }
})