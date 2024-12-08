import React, { useState } from 'react';
import handleUpload from '../handleUpload'; // Import the reusable upload function

export default function UploadImage() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    setError(null);
    try {
      const predictions = await handleUpload(file); // Use the reusable upload function
      setPredictions(predictions); // Store predictions in state
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
      {predictions.length > 0 && (
        <div>
          <h2>Predictions</h2>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>{prediction}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
