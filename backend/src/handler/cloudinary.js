// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'dmn8e3ma2', 
  api_key: '829749985117565', 
  api_secret: 'Fa_2hx6nLu1JhRg9kcKwc_8JQ54',
  secure: true,

});
module.exports = cloudinary;
