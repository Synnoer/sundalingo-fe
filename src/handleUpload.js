import axios from 'axios';

const handleUpload = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/detect/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return {
      predictions: response.data.predictions,
      inference_img_url: response.data.inference_img_url,
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Failed to upload image');
  }
};

export default handleUpload;
