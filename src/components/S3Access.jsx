const ID = process.env.REACT_APP_AWS_ACCESS_ID_KEY;
const AccessKey = process.env.REACT_APP_AWS_SECRET_KEY;

const S3_config = {
  bucketName: "images-weddings",
  //   dirName: "yourdirectoryname",
  region: "ue-west-2",
  accessKeyId: ID,
  secretAccessKey: AccessKey,
};
