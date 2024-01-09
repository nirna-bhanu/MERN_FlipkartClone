import mongoose from 'mongoose';

const Connection = async (username,password) => {
   const URL = `mongodb+srv://${username}:${password}@flipkart-clone.ljwevkq.mongodb.net/FLIPKART?retryWrites=true&w=majority`;

    try {
      await  mongoose.connect(URL, {
    
             useUnifiedTopology: true ,
            
            
            });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;