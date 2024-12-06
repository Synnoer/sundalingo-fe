import axios from 'axios';

const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post('http://127.0.0.1:8000/yolo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data.predictions);
    } catch (error) {
        console.error('Error uploading image:', error);
    }
};
