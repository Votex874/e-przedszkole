const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// creating a user Schema
const UserSchema = newSchema({
  role: {
    type: String,
    required: [true, 'Rola użytkownika nie została wybrana']
  },
  kinderGarderGroup: {
    type: String,
    required: true,
  },
  parent: {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    phone: {
      type: [Number],
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      street: {
        type: String,
        required: false
      },
      city: {
        type: String,
        required: false,
      },
      postNumber: {
        type: String,
        required: false,
      }
    },
    children: {
      name: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        required: true,
      },
      age: {
        type: Integer,
        required: true,
      }
    }
  }
});

const User = mongoose.model('user', UserSchema);

export default User