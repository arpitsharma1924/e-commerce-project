import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7317.177717762891!2d77.80677993652172!3d23.51131395352106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c04f2ff2de403%3A0x8c41ff615b5d8dde!2sRoyal%20City%20Colony%2C%20Durga%20Nagar%2C%20Vidisha%2C%20Madhya%20Pradesh%20464001!5e0!3m2!1sen!2sin!4v1685621382178!5m2!1sen!2sin"
        width="100%"
        height="250"
        title="mylocation"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xyyaqygn"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              autoComplete="off"
              required
            />
            <textarea
              placeholder="enter your message"
              name="Message"
              cols={53}
              rows={10}
              required
            ></textarea>
            <input type="submit" value={"Submit"} />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 4.5rem 0 0rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input:focus, textarea:focus {
          outline: none;
          box-shadow: #e40046 0px 2px 0px;
        }
        input, textarea {
          border-color: #e40046;
          box-shadow: none;
        }
        
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          max-width: 100%;

          &:hover {
            /* background-color: ${({ theme }) => theme.colors.white}; */
            /* border: 1px solid #e40046; */
            /* color: #e40046; */
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
