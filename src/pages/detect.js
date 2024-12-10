import React, { useState } from 'react';
import handleUpload from '~/handleUpload'; // Import the reusable upload function

export default function UploadImage() {
  const [predictions, setPredictions] = useState([]);
  const [inferenceImageUrl, setInferenceImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    setError(null);
    try {
      const { predictions, inference_img_url } = await handleUpload(file); // Destructure response
      setPredictions(predictions);
      setInferenceImageUrl(inference_img_url);
    } catch (err) {
      setError('Failed to upload image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Image Detection</h1>
      <input type="file" onChange={handleImageUpload} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {inferenceImageUrl && (
        <div>
          <h2>Processed Image</h2>
          <img src={inferenceImageUrl} alt="Processed Output" style={{ maxWidth: '100%' }} />
        </div>
      )}
      {predictions.length > 0 && (
        <div>
          <h2>Predictions</h2>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                <strong>Label:</strong> {prediction.label || 'Unknown'} <br />
                <strong>Confidence:</strong> {(prediction.confidence)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
