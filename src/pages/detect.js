import axios from 'axios';

export default function UploadImage() {
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/detect/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Predictions:', response.data.predictions);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
}
