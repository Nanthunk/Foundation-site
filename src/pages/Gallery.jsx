import Navbar from "../components/Navbar";
import "./Gallery.css";
import GalleryImage from "../assets/Gallery.jpg";
import {
  FaArrowRight,
  FaCamera,
  FaImages,
  FaWhatsapp,
} from "react-icons/fa";

function Gallery() {
  return (
    <section className="gallery-page">

        <Navbar />

      {/* ================= HERO ================= */}

      <section className="gallery-hero">

        <div className="hero-circle circle1"></div>
        <div className="hero-circle circle2"></div>
        <div className="hero-circle circle3"></div>

        <div className="gallery-container">

          <p className="gallery-label">
            ZUGO FOUNDATION GALLERY
          </p>

          <h1 className="gallery-title">
            A Glimpse Into Our
            <br />
            <span>Business Community.</span>
          </h1>

          <p className="gallery-description">
            Every photograph tells a story of hope, compassion,
            community service and lives transformed through
            ZUGO Foundation initiatives.
          </p>

          <a href="#gallery" className="gallery-btn">
            Explore Gallery
            <FaArrowRight />
          </a>

        </div>

      </section>

      

      {/* ================= PHOTO GALLERY ================= */}

      <section
        className="photo-gallery"
        id="gallery"
      >

        <div className="gallery-container">

          <div className="section-heading">

            <p>PHOTO GALLERY</p>

            <h2>

              Moments That
              <span> Inspire</span>

            </h2>

          </div>

          <div className="photo-grid">

            {/* Image 1 */}

            <div className="photo-card">

              <img
                src={GalleryImage}
                alt="Gallery"
              />

              <div className="photo-overlay">

                <FaCamera />

                <h3>Image 1</h3>

              </div>

            </div>

            {/* Image 2 */}

            <div className="photo-card">

              <img
                src={GalleryImage}
                alt="Gallery"
              />

              <div className="photo-overlay">

                <FaCamera />

                <h3>Image 2</h3>

              </div>

            </div>

            {/* Image 3 */}

            <div className="photo-card">

              <img
                src={GalleryImage}
                alt="Gallery"
              />

              <div className="photo-overlay">

                <FaCamera />

                <h3>Image 3</h3>

              </div>

            </div>

            {/* Image 4 */}

            <div className="photo-card">

              <img
                src={GalleryImage}
                alt="Gallery"
              />

              <div className="photo-overlay">

                <FaCamera />

                <h3>Image 4</h3>

              </div>

            </div>

            {/* Image 5 */}

            <div className="photo-card">

              <img
                src={GalleryImage}
                alt="Gallery"
              />

              <div className="photo-overlay">

                <FaCamera />

                <h3>Image 5</h3>

              </div>

            </div>

            {/* Image 6 */}

            <div className="photo-card">

              <img
                src={GalleryImage}
                alt="Gallery"
              />

              <div className="photo-overlay">

                <FaCamera />

                <h3>Image 6</h3>

              </div>

            </div>

            {/* Image 7 */}

            <div className="photo-card">

              <img
                src={GalleryImage}
                alt="Gallery"
              />

              <div className="photo-overlay">

                <FaCamera />

                <h3>Image 7</h3>

              </div>

            </div>

            {/* Image 8 */}

            <div className="photo-card">

              <img
                src={GalleryImage}
                alt="Gallery"
              />

              <div className="photo-overlay">

                <FaCamera />

                <h3>Image 8</h3>

              </div>

            </div>

            {/* Image 9 */}

            <div className="photo-card">

              <img
                src={GalleryImage}
                alt="Gallery"
              />

              <div className="photo-overlay">

                <FaCamera />

                <h3>Image 9</h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========= Gallery Part 2 Starts Below ========= */}

            {/* ================= VIDEO GALLERY ================= */}

      <section className="video-gallery">

        <div className="gallery-container">

          <div className="section-heading">

            <p>VIDEO GALLERY</p>

            <h2>
              Watch Our
              <span> Journey</span>
            </h2>

          </div>

          <div className="video-grid">

            <div className="video-card">

              <img
                src="/videos/thumbnail1.jpg"
                alt="Video 1"
              />

              <div className="play-overlay">

                <span>▶</span>

              </div>

              <h3>Video 1</h3>

            </div>

            <div className="video-card">

              <img
                src="/videos/thumbnail2.jpg"
                alt="Video 2"
              />

              <div className="play-overlay">

                <span>▶</span>

              </div>

              <h3>Video 2</h3>

            </div>

            <div className="video-card">

              <img
                src="/videos/thumbnail3.jpg"
                alt="Video 3"
              />

              <div className="play-overlay">

                <span>▶</span>

              </div>

              <h3>Video 3</h3>

            </div>

          </div>

        </div>

      </section>

      {/* ================= IMPACT ================= */}

      {/* <section className="gallery-impact">

        <div className="gallery-container">

          <div className="section-heading">

            <p>OUR IMPACT</p>

            <h2>

              Every Picture
              <span> Tells A Story</span>

            </h2>

          </div>

          <div className="impact-grid">

            <div className="impact-card">

              <FaImages />

              <h2>500+</h2>

              <p>Photos Captured</p>

            </div>

            <div className="impact-card">

              <FaCamera />

              <h2>100+</h2>

              <p>Events Covered</p>

            </div>

            <div className="impact-card">

              <FaImages />

              <h2>10K+</h2>

              <p>Lives Impacted</p>

            </div>

            <div className="impact-card">

              <FaCamera />

              <h2>250+</h2>

              <p>Volunteers</p>

            </div>

          </div>

        </div>

      </section> */}

      {/* ================= SHARE MEMORIES ================= */}

      <section className="share-memories">

        <div className="gallery-container">

          <div className="share-box">

            <h2>

              Share Your
              <span> Beautiful Memories</span>

            </h2>

            <p>

              Have you participated in any ZUGO Foundation event?

              Share your photographs and videos with us to inspire
              more people to join our mission.

            </p>

            <a
              href="https://wa.me/919597099949?text=Hi%20ZUGO%20Foundation,%20I%20would%20like%20to%20share%20my%20event%20photos."
              target="_blank"
              rel="noreferrer"
              className="share-btn"
            >

              <FaWhatsapp />

              Share on WhatsApp

            </a>

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="gallery-cta">

        <div className="gallery-container">

          <div className="cta-content">

            <p>JOIN OUR JOURNEY</p>

            <h2>

              Together We Create
              <span> Memories That Matter.</span>

            </h2>

            <p className="cta-text">

              Every meeting sparks new ideas, every conversation builds valuable relationships, and every event creates opportunities for business growth. Join us and be part of the journey.

            </p>

            <a
              href="https://wa.me/919597099949?text=Hi%20ZUGO%20Foundation,%20I%20want%20to%20join%20your%20next%20event."
              target="_blank"
              rel="noreferrer"
              className="gallery-whatsapp-btn"
            >

              <FaWhatsapp />

              Join via WhatsApp

            </a>

          </div>

        </div>

      </section>

    </section>
  );
}

export default Gallery;