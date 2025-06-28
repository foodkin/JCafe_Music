// Gen14.jsx
import { useState } from 'react';
import Gen14Loading from '../Feature/Gen14Loading';
import '../CSS/Gen14.css';

function Gen14() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Background layer tetap muncul sejak awal */}
      <div className="gen14-background-layer"></div>

      {isLoading ? (
        <Gen14Loading
          onLoadingComplete={handleLoadingComplete}
          imageSrc="/images/Gen14Load.jpg"
        />
      ) : (
        <div className="gen14-content fade-in">
          <h1>Selamat Datang di JMusic 🎶</h1>
          <p className="gen14-subtitle">Gen 14</p>
        </div>
      )}
    </>
  );
}

export default Gen14;