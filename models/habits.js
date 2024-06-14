import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Status',
    }
  ]
}, {
  timestamps: true,
});

const Habits = mongoose.model('Habits', habitSchema);

export default Habits;
