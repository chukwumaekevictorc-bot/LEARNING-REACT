import React from "react";
import Header from "../Components/Header/Header"


function Aboutus() {
  const styles = {
    section: {
      width: "100%",
      padding: "80px 7%",
      backgroundColor: "#774535",
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "center",
    },

    content: {
      maxWidth: "550px",
    },

    label: {
      color: "#19d294",
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "2px",
    },

    heading: {
      fontSize: "45px",
      lineHeight: "1.2",
      color: "#172033",
      margin: "15px 0 25px",
    },

    blueText: {
      color: "#1976d2",
    },

    paragraph: {
      color: "#687386",
      fontSize: "16px",
      lineHeight: "1.8",
      marginBottom: "18px",
    },

    button: {
      marginTop: "10px",
      padding: "13px 28px",
      border: "none",
      borderRadius: "6px",
      backgroundColor: "#1976d2",
      color: "white",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(25, 118, 210, 0.25)",
    },

    cards: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },

    card: {
      backgroundColor: "white",
      padding: "30px 25px",
      borderRadius: "10px",
      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.08)",
    },

    icon: {
      width: "55px",
      height: "55px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e3f2fd",
      borderRadius: "50%",
      fontSize: "25px",
      marginBottom: "18px",
    },

    cardTitle: {
      color: "#172033",
      fontSize: "19px",
      marginBottom: "12px",
    },

    cardText: {
      color: "#7a8495",
      fontSize: "14px",
      lineHeight: "1.7",
    },
  };

  return (
    <div>
        <Header/>
    <section style={styles.section}>
      <div style={styles.container}>

        {/* LEFT SIDE */}
        <div style={styles.content}>
          <span style={styles.label}>ABOUT-US</span>

          <h1 style={styles.heading}>
            We are building the{" "}
            <span style={styles.blueText}>
              future of Information Technology in Imo State
            </span>
          </h1>

          <p style={styles.paragraph}>
            Welcome to WHOBA OGO, a modern learning platform designed to help
            students obtain IT skilss. We provide
            quality education, useful resources, and a supportive learning
            environment.
          </p>

          <p style={styles.paragraph}>
            Our goal is to make learning simple, accessible, and enjoyable.
            We believe that every student deserves the opportunity to learn,
            grow, and succeed.
          </p>

          <button style={styles.button}>
            Learn More
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.cards}>

          <div style={styles.card}>
            <div style={styles.icon}>🎓</div>

            <h3 style={styles.cardTitle}>
              Excellent Training
            </h3>

            <p style={styles.cardText}>
              Offering high-quality teaching materials and academic
              resources for IT learning.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>💡</div>

            <h3 style={styles.cardTitle}>
              IT Future is Here
            </h3>

            <p style={styles.cardText}>
              learning is made easy
              and more engaging.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>👨‍🎓</div>

            <h3 style={styles.cardTitle}>
              Focused on Student IT needs
            </h3>

            <p style={styles.cardText}>
              Our students are at the center of everything we do. We
              support their growth and success in IT.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🚀</div>

            <h3 style={styles.cardTitle}>
              Future Ready
            </h3>

            <p style={styles.cardText}>
              We prepare students with the skills and knowledge they
              need for a future in IT.
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}

export default Aboutus;