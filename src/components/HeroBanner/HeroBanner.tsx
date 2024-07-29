import CallToAction from "../Forms/CallToAction/CallToAction";
import "./styles/hero-banner.css";

interface IHeroBannerProps {
  bannerText?: string;
  bannerImage?: string;
  bannerContentLeft?: string;
  bannerContentRight?: string;
}

const HeroBanner: React.FC<IHeroBannerProps> = ({
  // bannerText,
  bannerImage,
}) => {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: bannerImage ? bannerImage : "" }}
    >
      <div className="hero-banner__container">
        <article className="hero-banner-text-container">
          <h1 className="hero-banner-text">
            Evict Your <br />
            Mum
          </h1>
        </article>
        <section className="hero-banner-content">
          <section className="hero-banner-content__top">
            <article className="hero-banner-left">
              <p className="hero-banner-left__content">
                Welcome to Evict Your Mum. Your first stop in getting your mum
                out of her house.
              </p>
            </article>
            <article className="hero-banner-right">
              <ul className="hero-banner__list">
                <li className="hero-banner__list-item">
                  <div className="hero-banner__large">
                    <span className="emphasis--color">+</span>
                    1k
                  </div>
                  <div className="hero-banner__small">Evicted mums</div>
                </li>
                <li className="hero-banner__list-item">
                  <div className="hero-banner__large">
                    <span className="emphasis--color">+</span>
                    3k
                  </div>
                  <div className="hero-banner__small">
                    Eviction notices served
                  </div>
                </li>
                <li className="hero-banner__list-item">
                  <div className="hero-banner__large">
                    <span className="emphasis--color">+</span>
                    10k
                  </div>
                  <div className="hero-banner__small">Positive Reviews</div>
                </li>
              </ul>
            </article>
          </section>
          <article className="hero-banner-center">
            <CallToAction />
          </article>
        </section>
      </div>
    </section>
  );
};

export default HeroBanner;
