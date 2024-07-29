import React, { SyntheticEvent, useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Input from "../FormInputs/Input";
import "./styles/call-to-action.css";

const CallToAction: React.FC = () => {
  const form = useRef("");
  const [email, updateEmail] = useState<string | null>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  useEffect(() => emailjs.init("tz7g4iIgKeYtQakrB"), []);

  const handleInput = (e: InputEvent) => {
    if (!e.target) return;
    updateEmail((e.target as HTMLInputElement).value);
  };

  const sendEmail = (e: SyntheticEvent): void => {
    e.preventDefault();

    if (email === "") {
      alert("Please enter your email");
      return;
    }

    emailjs
      .send("service_zjaht6p", "template_ud3cvtq", {
        reply_to: email,
      })
      .then(
        () => {
          console.log("Hello, all done ");
          setShowSuccess(true);
        },
        (error: unknown) => {
          console.log("FAILED ", error);
        }
      );
  };
  return (
    <article className="call-to-action">
      {showSuccess ? (
        <p>
          Thanks, we will be in touch - your mum is going to become homeless
        </p>
      ) : (
        <form
          ref={form}
          className="call-to-action__form"
          onSubmit={(e: SyntheticEvent) => sendEmail(e)}
        >
          <Input
            inputType="email"
            inputId="callToActionInput"
            labelName="Enter Your Email"
            showLabel={false}
            placeholder="Enter Your Email"
            inputFunction={handleInput}
          />
          <button className="call-to-action__button" onClick={sendEmail}>
            Submit
          </button>
        </form>
      )}
    </article>
  );
};

export default CallToAction;
