import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function About() {
  return (
    <div>
      <Header />
      <div>
        <header
          style={{
            backgroundColor: "#333",
            color: "#fff",
            textAlign: "center",
            padding: "1em",
          }}
        >
          <h1>About Us</h1>
        </header>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ maxWidth: "800px", padding: "2em", textAlign: "center" }}
          >
            <h2>Welcome to our Online Library!</h2>
            <p>
              We are passionate about books and knowledge. Our online library
              provides a vast collection of books from various genres, catering
              to readers of all ages and interests. Whether you're a fiction
              enthusiast, a history buff, or someone looking for educational
              resources, we have something for you.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ maxWidth: "800px", padding: "2em", textAlign: "center" }}
          >
            <h3>Our Mission</h3>
            <p>
              Our mission is to make the joy of reading accessible to everyone.
              We believe that books have the power to inspire, educate, and
              entertain, and we strive to create an online platform that fosters
              a love for reading and learning.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ maxWidth: "800px", padding: "2em", textAlign: "center" }}
          >
            <h3>Our Team</h3>
            <p>
              Our dedicated team of librarians, developers, and book lovers work
              tirelessly to curate and maintain our library's collection. We are
              committed to providing a seamless and enjoyable reading experience
              for our users.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ maxWidth: "800px", padding: "2em", textAlign: "center" }}
          >
            <h3>Contact Us</h3>
            <p>
              If you have any questions, suggestions, or feedback, feel free to
              reach out to us. We value your input and are always looking for
              ways to improve our services.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@secretpassage.com">info@secretpassage.com</a>
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
