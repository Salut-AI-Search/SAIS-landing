import { S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  endpoint: 'http://90.156.229.249:9191',
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.VUE_APP_MINIO_LOGIN as string,
    secretAccessKey: process.env.VUE_APP_MINIO_PASSWORD as string,
  },
  forcePathStyle: true,
});

export default s3Client;
