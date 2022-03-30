require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || undefined;

module.exports = { MONGODB_URI };
