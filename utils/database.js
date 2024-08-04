import mongoose from 'mongoose'

let isConnected = false 

const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    console.log('trying to connect to DB')
    if(isConnected) {
        console.log('MongoDB is already connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "bidtgtDB",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })

        isConnected = true

        console.log('MongoDB connected')
    }   catch(error) {
        console.log('database error???', error)
    }
}

export default connectToDB