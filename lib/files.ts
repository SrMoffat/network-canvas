import { v2 as cloudinary } from 'cloudinary';

export const uploadFile = async (path: string, name: string) => {
  try {
    // Upload the file to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(path, {
      folder: 'network-canvas-uploads',
      resource_type: 'auto',
      public_id: name,
      overwrite: true,
    });
    return uploadResult?.secure_url;
  } catch (error) {
    throw error;
  }
};
