const express = require(express);
const app = express();
require('dotenv').config();



const PORT = process.config.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`=== Server is runnning on PORT ${PORT} ===`);
});