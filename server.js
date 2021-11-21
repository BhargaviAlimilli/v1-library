const mongoose= require('mongoose')
const app= require('./app')

// Connecting to the data base
mongoose.connect('mongodb+srv://library:<password>@cluster0.cmwvd.mongodb.net/Library?retryWrites=true&w=majority',{
    useNewUrlParser: true
}).then(
    (success) => { console.log("DB connection succesful")},
    err => { console.log(err)}
  );

// listening to the port that is created
app.listen(4041, ()=>{
    console.log("listening on port 4041")
})
