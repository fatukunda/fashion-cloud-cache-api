
import mongoose from 'mongoose';

const cacheSchema = mongoose.Schema({
  ttl: {
    type: Date,
    expires: '5000',
    default: Date.now,
  },
  content: {
    type: String,
    default: (Math.random().toString(36).substr(5, 9)),
  },
  key: {
    type: String,
    trim: true,
    unique: true,
  },
});
// eslint-disable-next-line func-names
cacheSchema.pre('save', function (next) {
  // Create a new ttl everytime a cache is created or modified
  const cache = this;
  cache.ttl = new Date();
  next();
});


const Cache = mongoose.model('Cache', cacheSchema);

export default Cache;
