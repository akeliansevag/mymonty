'use client';
import React, { useEffect, useRef, useState } from 'react';

function SplineAnimation() {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    import('@splinetool/viewer').then(() => {
      setReady(true); // Render the <spline-viewer> only after it's loaded
    });
  }, []);

  useEffect(() => {
    if (!ready) return;

    const viewer = document.querySelector('spline-viewer');

    const styleCanvas = () => {
      if (viewer?.shadowRoot) {
        const canvas = viewer.shadowRoot.querySelector('canvas');
        if (canvas) {
          canvas.style.width = '100%';
          canvas.style.height = '100%';
          canvas.style.cursor = 'default';
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      styleCanvas();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const timeout = setTimeout(styleCanvas, 100); // Give Spline time to initialize

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeout);
    };
  }, [ready]);

  return (
    <section className='relative pt-24 pb-24 bg-black mt-20 text-white'>
      <div className='container'>
        <div className='flex max-lg:flex-col items-center gap-8 mt-10'>
          <div className="lg:w-1/2">
            <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
              {ready && (
                <spline-viewer url="https://prod.spline.design/YjilrVqHEgRC0AGl/scene.splinecode" style={{ width: '100%', height: '100%', display: 'block' }} />
              )}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-6 leading-none uppercase'>Personalized Mastercard prepaid cards</h1>
            <p className='text-xl mt-8'>Discover our dope collection!<br />Choose the color and style that suits your vibe. Step into a world of personalized virtual cards made just for you!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SplineAnimation