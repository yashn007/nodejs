var mongoose =  require('mongoose');
var url =  "mongodb://localhost:27017/Yoptimize";
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
