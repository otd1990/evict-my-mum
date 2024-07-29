import CallToAction from "../Forms/CallToAction/CallToAction";
import "./styles/call-to-action-section.css";

const CallToActionSection: React.FC = () => {
  return (
    <article className="call-to-action-section__wrapper">
      <section className="call-to-action-section">
        <h2 className="call-to-action-heading">Contact Us Now Please</h2>
        <CallToAction />
      </section>
    </article>
  );
};

export default CallToActionSection;
