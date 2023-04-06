import { app } from "./app.js";
import Razorpay from 'razorpay'
// const db = require("./config/db.js")
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_SECRET_KEY,
})

// db.connectToDatabase().then(function () {

//   app.listen(3000);

// });
app.listen(process.env.PORT, () => {
  console.log("Server is runing in port 4000");
});
