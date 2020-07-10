const express=require('express');
const app=express();
const cors=require('cors');
const path=require('path');
const mongoose=require('mongoose');
const config=require('config');
app.use(express.json()); 








// CORS Middleware
app.use(cors());
// Logger Middleware


// DB Config

const db = config.get('mongodbURL');

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log("false"));

// Use Routes

app.use('/api/auth', require('./API/Auth/auth'));
app.use('/api/collection',require('./API/Collection/collectionapi'));
app.use('/bookdetail',require('./API/BookCollection/bookCollection'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`server started on  ${port}`);
})

module.exports=app;