import s3Client from '../boot/minio';
import { ListObjectsCommand } from '@aws-sdk/client-s3';

const useAssets = () => {
  const getAssets = async () => {
    const command = new ListObjectsCommand({ Bucket: 'my-bucket' });
    return await s3Client
      .send(command)
      .then((res) => {
        return res.Contents;
      })
      .catch((e) => {
        console.error(e);
        return null;
      });
  };

  return { getAssets };
};

export default useAssets;
