// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: process.env.DB_CLOUD_NAME, 
  api_key: process.env.DB_API_KEY, 
  api_secret: process.env.DB_API_SECRET,
  secure: true,

});
module.exports = cloudinary;
