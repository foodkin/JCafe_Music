// Gen14.jsx
import { useState } from 'react';
import Gen14Loading from '../Feature/Gen14Loading';
import '../CSS/Gen14.css';

function Gen14() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Gen14Loading onLoadingComplete={handleLoadingComplete} imageSrc="/images/Gen14Load.jpg" />;
  }

  return (
    <div className="gen14-container fade-in">
      <h1>Selamat Datang di JMusic 🎶</h1>
      <p>Gen 14</p>
      
    </div>
  );
}

export default Gen14;