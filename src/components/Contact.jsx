import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="grid">
          <div className="contact-desc">
            <h1>Want to</h1>
            <h1>start</h1>
            <h1>
              a <span>new</span>
            </h1>
            <h1>project?</h1>
            <h4>or just say hello.</h4>
          </div>
          <div className="contact-info">
            <div className="contact-socials">
              <div className="contact-social">
                <a href="https://www.linkedin.com/in/segun-sobodu-05a21b32?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <FaLinkedinIn className="icon" />
                </a>
                <h6>LinkedIn</h6>
              </div>
              <div className="contact-social">
                <a href="https://twitter.com/sirpekun?lang=ar">
                  <FaTwitter className="icon" />
                </a>
                <h6>Twitter</h6>
              </div>
              <div className="contact-social">
                <a href="https://www.instagram.com/sir_pekun?utm_source=qr">
                  <FaInstagram className="icon" />
                </a>
                <h6>Instagram</h6>
              </div>
            </div>

            <div className="contact-form">
              <h3>Drop a message</h3>
              <form action="/contact" name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                <div className="form-group">
                  <div className="input-group-prepend input-group-lg">
                    <span className="input-group-text bg-danger text-white"></span>
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-dark text-white"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group-prepend input-group-lg">
                    <span className="input-group-text bg-danger text-white"></span>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-dark text-white"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group-prepend input-group-lg">
                    <span className="input-group-text bg-danger text-white"></span>
                    <textarea
                      className="form-control bg-dark text-white"
                      name="message"
                      placeholder="Message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  name="submit"
                  className="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
