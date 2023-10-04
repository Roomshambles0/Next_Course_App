import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
    let url = process.env.MONGO_URL as string;
    
    if (alreadyDone) {
        return;
    }
    alreadyDone = true;
    await mongoose.connect(url);
}