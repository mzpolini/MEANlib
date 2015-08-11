var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  creator: {
    type: Schema.ObjectID,
    ref: 'User'
  }
});

mongoose.model('Article',ArticleSchema);
