const mongoose=require('mongoose');
// const {MONGOURI}=require('./keys');

// mongoose.connect(MONGOURI,{
//     useNewUrlParser : true,
//     useUnifiedTopology:true

// });

const revenue=new mongoose.Schema({
    amount :{
        type :Integer,
        required :true
    },
    datereceived :{
        type :Date,
        required :true  
    }
  
})

mongoose.model("Revenue",revenueSchema);
