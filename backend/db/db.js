// // db.js (Example structure)
// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB Connected...');
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// // You must export the function for other files to use it
// module.exports = connectDB;



// db.js

const mongoose = require('mongoose');

// The function to connect to the database
const connectDB = async () => {
    try {
        // Mongoose automatically uses modern options (like useNewUrlParser, useUnifiedTopology) 
        // so you don't need to pass them anymore.
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        // Exit process with failure
        process.exit(1);
    }
};

// Export the function so app.js can use it
module.exports = connectDB;