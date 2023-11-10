const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinariConfig'); // adjust the path

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
    folder: 'product_images',
    format: async (req, file) => 'jpg', // set the format to 'jpg' or whatever you prefer
    public_id: (req, file) => file.filename + '-' + Date.now(),
    },
});

const upload = multer({ storage: storage });

module.exports = upload;