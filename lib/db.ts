import mongoose from "mongoose";

const connect = async () => {
  try {
    const URI = process.env.MONGODB_URI
    await mongoose.connect(URI || '')
    console.log('connected to DB Successfully')
  } catch (err) {
    console.log('error connecting to DB\n', err)
  }
}

export default connect;