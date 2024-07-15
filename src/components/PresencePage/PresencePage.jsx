import React, { useState } from 'react'; 
import './PresencePage.css'; 
 
const flagImages = [ 
  { src: 'src/assets/Saudi_Arabia.webp', alt: 'Italy Flag', label: 'Italy' }, 
  { src: 'src/assets/india.webp', alt: 'Russia Flag', label: 'Russia' }, 
  { src: 'src/assets/Saudi_Arabia.webp', alt: 'USA Flag', label: 'USA' }, 
  { src: 'src/assets/Africa.webp', alt: 'Brazil Flag', label: 'Brazil' }, 
  { src: 'src/assets/Italy.webp', alt: 'Italy Flag', label: 'Italy' }, 
  { src: 'src/assets/Africa.webp', alt: 'France Flag', label: 'France' }, 
  { src: 'src/assets/Africa.webp', alt: 'Russia Flag', label: 'Russia' }, 
  { src: 'src/assets/USA.webp', alt: 'USA Flag', label: 'USA' }, 
  { src: 'src/assets/Italy.webp', alt: 'Brazil Flag', label: 'Brazil' }, 
  { src: 'src/assets/india.webp', alt: 'Italy Flag', label: 'Italy' }, 
  { src: 'src/assets/Africa.webp', alt: 'France Flag', label: 'France' }, 
  { src: 'src/assets/Russia.webp', alt: 'Russia Flag', label: 'Russia' }, 
  { src: 'src/assets/Italy.webp', alt: 'USA Flag', label: 'USA' }, 
  { src: 'src/assets/USA.webp', alt: 'Brazil Flag', label: 'Brazil' }, 
  { src: 'src/assets/Saudi_Arabia.webp', alt: 'Italy Flag', label: 'Italy' }, 
  { src: 'src/assets/Russia.webp', alt: 'France Flag', label: 'France' }, 
  { src: 'src/assets/india.webp', alt: 'Russia Flag', label: 'Russia' }, 
  { src: 'src/assets/Italy.webp', alt: 'USA Flag', label: 'USA' }, 
  { src: 'src/assets/Africa.webp', alt: 'Brazil Flag', label: 'Brazil' } 
 
]; 
 
const PresencePage = () => { 
  const [currentSlide, setCurrentSlide] = useState(0); 
 
  const handleDotClick = (index) => { 
    setCurrentSlide(index); 
  }; 
 
  return ( 
    <div className="presence-page"> 
      <button className="explore-button">Our Presence</button> 
      <p className="presence-page-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cupiditate ullam numquam, enim asperiores earum, magni reprehenderit iste tempore dolorem nostrum quae, provident placeat expedita? Id culpa repellendus consectetur corrupti.</p> 
      <div className="flags"> 
        {flagImages.slice(currentSlide, currentSlide + 4).map((flag, index) => ( 
          <div className="flag" key={index}> 
            <img src={flag.src} alt={flag.alt} /> 
            <p className="flags-p">{flag.label}</p> 
          </div> 
        ))} 
      </div> 
      <div className="carousel-indicators"> 
        {Array(Math.ceil(flagImages.length / 4)).fill(0).map((_, index) => ( 
          <span 
            key={index} 
            className={`dot ${index === currentSlide / 4 ? 'active' : ''}`} 
            onClick={() => handleDotClick(index * 4)} 
          ></span> 
        ))} 
      </div> 
    </div> 
  ); 
} 
 
export default PresencePage;