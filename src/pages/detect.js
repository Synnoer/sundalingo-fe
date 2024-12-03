import axios from 'axios';
import { useState } from 'react';

export default function Detect() {
    const [data, setData] = useState(null);

    const handleDetect = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/detect/');
        setData(response.data);
    };

    return (
        <div>
            <button onClick={handleDetect}>Run Detection</button>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}
