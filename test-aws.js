const AWS = require('aws-sdk');
require('dotenv').config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

s3.listBuckets((err, data) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Bucket List", data.Buckets);
    }
});
