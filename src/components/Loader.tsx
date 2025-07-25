// src/components/Loader.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/style/loader.css';

export default function Loader() {
  const [loadingText, setLoadingText] = useState('');
  const [repeatCount, setRepeatCount] = useState(0);

  useEffect(() => {
    const text = '...';
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setLoadingText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setRepeatCount((prev) => prev + 1);
        if (repeatCount < 1) {
          setTimeout(() => {
            setLoadingText('');
          }, 100);
        }
      }
    }, 300);
    return () => clearInterval(intervalId);
  }, [repeatCount]);

  return (
    <div className="loader-container">
      <Image
        src="/assets/images/Logos/logo.png"
        alt="Logo"
        width={125}
        height={125}
        className="rotating-logo"
      />
      <h1 className="loading-text">Cargando{loadingText}</h1>
    </div>
  );
}