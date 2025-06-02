import { AwsClient } from 'aws4fetch';
import * as fs from 'fs';


export async function uploadFileToS3WithAws4Fetch(filePath: string, s3ObjectFullUrl: string): Promise<void> {
  if (!fs.existsSync(filePath)) {
    console.error(`Error: File not found at ${filePath}`);
    return;
  }

  const S3_REGION = process.env.S3_REGION;
  const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID;
  const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY;
  if ( !S3_REGION || !S3_ACCESS_KEY_ID || !S3_SECRET_ACCESS_KEY) {
      console.error(
          'Error: Missing required environment variables. ' +
          'Please set AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, and S3_BUCKET_NAME.'
      );
      return
  }
    const client = new AwsClient({
        accessKeyId: S3_ACCESS_KEY_ID,
        secretAccessKey: S3_SECRET_ACCESS_KEY,
        region: S3_REGION,
    });
    const signed = await client.sign(new Request(`${s3ObjectFullUrl}?X-Amz-Expires=${3600}`), { aws: { signQuery: true } , method: "PUT" })
    const uploadUrl = signed.url.toString()
    const fileBuffer = await fs.promises.readFile(filePath);
  try {
    console.log(`Starting upload file: [${filePath}] ...`);
    const resp = await fetch(uploadUrl, { method: "PUT", body: fileBuffer })
    if (resp.ok) {
      console.log(`Successfully uploaded ${filePath} to ${s3ObjectFullUrl}`);
    } else {
      const errorText = await resp.text();
      console.error(
        `Error uploading file to S3: ${filePath}. Status: ${resp.status}, Message: ${errorText}`
      );
    }
  } catch (error) {
    console.error(`Error uploading file to S3 with aws4fetch: ${filePath}`, error);
  }
}