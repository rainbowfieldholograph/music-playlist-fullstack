require('dotenv').config()
const fs = require('fs')

const S3 = require('aws-sdk/clients/s3')

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccesKey = process.env.AWS_SECRET_KEY

const s3 = new S3({ region: region, accessKeyId: accessKeyId, secretAccessKey: secretAccesKey })

const uploadFileAWS = async (pathName, name) => {
  const fileStream = fs.createReadStream(pathName)
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: name,
  }
  return s3.upload(uploadParams).promise()
}

exports.uploadFileAWS = uploadFileAWS
