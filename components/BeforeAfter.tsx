import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface BeforeAfterCardProps {
  beforeImgSrc: string;
  afterImgSrc: string;
  title: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ beforeImgSrc, afterImgSrc, title, description, beforeLabel, afterLabel }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        let percentage = (x / rect.width) * 100;
        
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;

        setSliderPosition(percentage);
    }, [isDragging]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        handleMove(e.clientX);
    }, [handleMove]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (e.touches[0]) {
            handleMove(e.touches[0].clientX);
        }
    }, [handleMove]);

    const stopDragging = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('mouseup', stopDragging);
            document.addEventListener('touchend', stopDragging);
            document.body.style.cursor = 'ew-resize';
            document.body.style.userSelect = 'none';
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('mouseup', stopDragging);
            document.removeEventListener('touchend', stopDragging);
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        };
    }, [isDragging, handleMouseMove, handleTouchMove, stopDragging]);
    
    const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div
                ref={containerRef}
                className="relative w-full aspect-video select-none overflow-hidden group"
            >
                {/* After Image (clipped) */}
                <div 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                    }}
                >
                    <img src={afterImgSrc} alt="Après le nettoyage" className="w-full h-full object-cover object-center pointer-events-none" />
                     <span className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 text-sm font-bold rounded-full">{afterLabel}</span>
                </div>

                {/* Before Image (base) */}
                <div className="w-full h-full">
                    <img src={beforeImgSrc} alt="Avant le nettoyage" className="w-full h-full object-cover object-center pointer-events-none" />
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded-full">{beforeLabel}</span>
                </div>
                
                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white/80 backdrop-blur-sm cursor-ew-resize"
                    style={{
                        left: `calc(${sliderPosition}% - 2px)`,
                    }}
                    onMouseDown={startDragging}
                    onTouchStart={startDragging}
                >
                    <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-12 h-12 bg-white/90 rounded-full shadow-2xl flex items-center justify-center border-2 border-gray-200 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-gray-600 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                    </div>
                </div>
            </div>
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};


const BeforeAfter: React.FC = () => {
    const { t } = useLanguage();
  return (
    <section id="avant-apres" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t.beforeAfterTitle}</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t.beforeAfterSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <BeforeAfterCard 
            beforeImgSrc="/images/image1.jpg"
            afterImgSrc="https://picsum.photos/800/600?random=2"
            title={t.beforeAfter1Title}
            description={t.beforeAfter1Desc}
            beforeLabel={t.beforeLabel}
            afterLabel={t.afterLabel}
          />
          <BeforeAfterCard 
            beforeImgSrc="/images/image1.jpg"
            afterImgSrc="https://picsum.photos/800/600?random=3"
            title={t.beforeAfter2Title}
            description={t.beforeAfter2Desc}
            beforeLabel={t.beforeLabel}
            afterLabel={t.afterLabel}
          />
          <BeforeAfterCard 
            beforeImgSrc="https://picsum.photos/800/600?random=3&grayscale" 
            afterImgSrc="/images/image1.jpg"
            title={t.beforeAfter2Title}
            description={t.beforeAfter2Desc}
            beforeLabel={t.beforeLabel}
            afterLabel={t.afterLabel}
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
