"use client";
import { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import Image from 'next/image';

declare global {
  interface Window {
    jQuery: typeof $;
    $: typeof $;
    bootstrap: {
      Carousel: any;
    };
  }
}

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      loadScripts();
    }
  }, );
  
  const loadScripts = () => {
    if (typeof window !== 'undefined' && !window.bootstrap) {
      const jQueryScript = document.createElement('script');
      jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      jQueryScript.onload = loadBootstrap;
      document.body.appendChild(jQueryScript);
    } else {
      loadBootstrap();
    }
  };

  const loadBootstrap = () => {
    if (typeof window !== 'undefined' && !window.bootstrap) {
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.5.0/dist/js/bootstrap.min.js';
      bootstrapScript.onload = initializeBootstrap;
      document.body.appendChild(bootstrapScript);
    } else {
      initializeBootstrap();
    }
  };

  const initializeBootstrap = () => {
    if (typeof window !== 'undefined') {
      window.bootstrap.Carousel(document.getElementById('myCarousel'), {
        interval: 2000,
      });
    }
  };
  
  

   return (
    <main>
      <Navbar />
      <h1 className="p-2 text-3xl text-center"></h1>
      <div className="container"> 
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src="/a.jpg" alt="img1" width={1000} height={100} className="d-block w-100 h-50" />
            </div>

            <div className="carousel-item">
              <Image src="/b.jpg" alt="img2" width={1000} height={100} className="d-block w-100" />
            </div>

            <div className="carousel-item">
              <Image src="/c.jpg" alt="img3" width={1000} height={100} className="d-block w-100" />
            </div>

            <div className="carousel-item">
              <Image src="/d.jpg" alt="img4" width={1000} height={100} className="d-block w-100" />
            </div>

            <div className="carousel-item">
              <Image src="/e.jpg" alt="img5" width={1000} height={100} className="d-block w-100" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
  );
   }
