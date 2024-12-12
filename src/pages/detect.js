import MainHeader from '~/components/mainheader';
import MainFooter from '~/components/footer'
import '~/styles/globals.css';
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
    <div className="bg-[#E5E5E5] text-gray h-full">
      <MainHeader />
      <div className="bg-white py-12">
        <div className="font-bold text-center">
          <span className="text-indigo-600 text-5xl">Unggah Fotomu</span>
          <span className="text-black text-5xl"> Di Sini</span>
        </div>
        <div className="flex justify-center mt-16">
          <button onClick={handleImageUpload} className="rounded-md px-5 py-1 bg-indigo-600">
            Terjemahkan
          </button>
        </div>
        <div className="grid grid-cols-2 gap-10 py-6 px-24">
          <div className="block">
            <div className="font-semibold text-black mb-4">
              Edit atau Tambahkan Foto
            </div>
            <div className="p-4 shadow-2xl h-full">
              <div className="">
                <input type="file" />
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {inferenceImageUrl && (
                  <div className="text-black">
                    <h2>Processed Image</h2>
                    <img src={inferenceImageUrl} alt="Processed Output" className="object-cover" style={{ maxWidth: '100%' }} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="block">
            <div className="font-semibold text-black mb-4">
              Terjemahan Aksara Sunda
            </div>
            <div className="p-4 shadow-2xl h-full text-black">
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
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}
