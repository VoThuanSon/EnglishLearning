const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const POST = process.env.POST || 5000;
app.listen(POST, () => {
    console.log(`Server is running on port ${POST}`)
})

