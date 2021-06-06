require('dotenv');
const AWS = require('aws-sdk');
const fs = require('fs');


const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new AWS.S3 ({
    region,
    accessKeyId,
    secretAccessKey
})


const uploadFile = (file) => {

    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
        Bucket:bucketName,
        Key:file.filename,
        Body:fileStream,
    }
    
    return s3.upload(uploadParams).promise()

}

exports.uploadFile = uploadFile;

