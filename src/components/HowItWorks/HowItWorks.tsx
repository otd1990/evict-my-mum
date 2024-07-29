import { SlBubbles, SlEnvolope, SlLike } from "react-icons/sl";
import "./styles/how-it-works.css";

interface InfoCard {
  id: number;
  title: string;
  desc: string;
}

const HowItWorks: React.FC = () => {
  const cards: InfoCard[] = [
    {
      id: 1,
      title: "Send Us An Email",
      desc: "Send us an email using the form so we can contact you",
    },
    {
      id: 2,
      title: "We'll Get In Touch",
      desc: "We'll reply asking for some more information",
    },
    {
      id: 3,
      title: "Sit Back & Relax",
      desc: "Put your feet up. Once we have the required information we'll set the wheels in motion and work towards evicting your mum",
    },
  ];
  return (
    <section className="how-it-works">
      <h2 className="how-it-works__title">How It Works</h2>
      <article className="how-it-works__cards">
        {cards.map(({ id, title, desc }) => {
          return (
            <section key={id} className="how-it-works__card">
              <div className="how-it-works-card__icon">
                {id === 1 ? <SlEnvolope size={35} /> : ""}
                {id === 2 ? <SlBubbles size={35} /> : ""}
                {id === 3 ? <SlLike size={35} /> : ""}
              </div>
              <div className="how-it-works-card__content">
                <h3 className="how-it-works-card__title">{title}</h3>
                <div className="how-it-works-card__desc">{desc}</div>
              </div>
            </section>
          );
        })}
      </article>
    </section>
  );
};

export default HowItWorks;
