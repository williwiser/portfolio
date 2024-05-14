import { useRef, useState } from "react";
import "../sn5.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Section5() {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("service_jndzm3c", "template_oa4vpkk", form.current!, {
        publicKey: "Ll8H5_isYgdFODuAM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error: Error) => {
          console.log("FAILED...", error.message);
        }
      );
    setMessageSent(true);
  };
  return (
    <>
      <section id="sn-5">
        <div className="wrapper">
          <h1 className="sn-title ct">Let's Get In Touch</h1>
          <p>
            Feel free to connect with me to collaborate on a project, or ask
            questions!
          </p>
          {messageSent ? (
            <motion.div
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                type: "tween",
                duration: 1.5,
                easeIn: 0.5,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                },
                animateState: {
                  opacity: 100,
                },
                exitState: {
                  opacity: 100,
                },
              }}
            >
              <h1 className="feedback">Got you! Will get in touch soon.</h1>
            </motion.div>
          ) : (
            <form
              ref={form}
              onSubmit={sendEmail}
              method="POST"
              id="usrform"
              encType="text/plain"
            >
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="eMail"
                id="eMail"
                placeholder="E-Mail"
                required
              />
              <textarea
                name="message"
                form="usrform"
                placeholder="Message"
              ></textarea>
              <input
                type="submit"
                className="btn"
                id="submitBtn"
                value="Submit"
              />
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export default Section5;
