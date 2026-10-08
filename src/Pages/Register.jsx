
import React, { useState } from 'react';
import Header from "../Components/Header/Header"

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      icon: '📊',
      shortDesc:
        'Transform raw data into actionable business intelligence and strategic insights.',
      fullDesc:
        'Learn how to clean, analyze, and visualize complex datasets using Microsoft Excel, Power BI, SQL, and Python.',
      features: [
        'Data Cleaning & Transformation',
        'Interactive Power BI Dashboards',
        'SQL Querying & Database Management',
        'Statistical Evaluation & Reporting',
      ],
    },
    {
      id: 'full-stack',
      title: 'Full-Stack Development',
      icon: '💻',
      shortDesc:
        'Master modern web development from interactive frontends to robust backends.',
      fullDesc:
        'Build modern web applications using HTML, CSS, JavaScript, React, Node.js, Git, and GitHub.',
      features: [
        'Responsive Web Design',
        'React App Development',
        'REST API & Database Integration',
        'Website Deployment',
      ],
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: '🚀',
      shortDesc:
        'Drive audience engagement and growth through targeted online campaigns.',
      fullDesc:
        'Learn practical strategies for social media management, search engine optimization, content creation, and online advertising.',
      features: [
        'Search Engine Optimization (SEO)',
        'Social Media Management',
        'Online Advertising',
        'Performance Analytics',
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: '🛡️',
      shortDesc:
        'Protect digital assets, secure networks, and reduce security risks.',
      fullDesc:
        'Learn the fundamentals of network security, ethical hacking, risk management, and security best practices.',
      features: [
        'Network Security',
        'Threat Detection',
        'System Vulnerability Assessment',
        'Security Best Practices',
      ],
    },
    {
      id: 'graphic-designing',
      title: 'Graphic Design',
      icon: '🎨',
      shortDesc:
        'Create attractive visual identities, marketing materials, and digital graphics.',
      fullDesc:
        'Develop creative skills in typography, branding, color theory, and layout design for digital and print media.',
      features: [
        'Logo & Brand Design',
        'Social Media Graphics',
        'Marketing Materials',
        'Color Theory & Typography',
      ],
    },
    {
      id: 'desktop-publishing',
      title: 'Desktop Publishing',
      icon: '📄',
      shortDesc:
        'Design professional documents, reports, flyers, and publications.',
      fullDesc:
        'Learn document formatting, page layout, presentation design, and digital publishing for professional and administrative purposes.',
      features: [
        'Document Formatting',
        'Flyer & Brochure Design',
        'Report & Presentation Design',
        'Professional Printing & Exporting',
      ],
    },
  ];

  return (
    <div className="services-container">
       <Header/> 
      <style>{`
        * {
          box-sizing: border-box;
        }

        .services-container {
          min-height: 100vh;
          background-color: #f8fafc;
          color: #1e293b;
          padding: 3rem 1.5rem;
          font-family: Arial, Helvetica, sans-serif;
        }

        .header-section {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        .header-badge {
          display: inline-block;
          background-color: #e0f2fe;
          color: #0369a1;
          font-weight: 600;
          font-size: 0.875rem;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          margin-bottom: 1rem;
        }

        .header-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 1rem;
          line-height: 1.2;
        }

        .header-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: #ffffff;
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
        }

        .icon-wrapper {
          width: 3.5rem;
          height: 3.5rem;
          background: #f1f5f9;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 0.75rem;
        }

        .card-description {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem;
          flex-grow: 1;
        }

        .feature-item {
          font-size: 0.875rem;
          color: #334155;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .feature-item::before {
          content: "✓";
          color: #0284c7;
          font-weight: bold;
        }

        .card-btn {
          width: 100%;
          padding: 0.85rem;
          background: #0284c7;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .card-btn:hover {
          background: #0369a1;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          border-radius: 1rem;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          position: relative;
          animation: fadeIn 0.2s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1.25rem;
          background: none;
          border: none;
          font-size: 1.75rem;
          color: #64748b;
          cursor: pointer;
        }

        .modal-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0 2rem 1rem 0;
          color: #0f172a;
        }

        .modal-body {
          font-size: 1rem;
          color: #334155;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .action-btn {
          display: block;
          width: 100%;
          text-align: center;
          background: #0f172a;
          color: white;
          padding: 0.9rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
        }

        .action-btn:hover {
          background: #1e293b;
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .services-container {
            padding: 2rem 1rem;
          }

          .header-title {
            font-size: 2rem;
          }

          .header-subtitle {
            font-size: 1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 1.5rem;
          }

          .modal-content {
            padding: 1.5rem;
          }
        }
      `}</style>

      <header className="header-section">
        <span className="header-badge">What I Offer</span>

        <h1 className="header-title">My Services</h1>

        <p className="header-subtitle">
          I provide professional digital services to help individuals and
          businesses grow, solve problems, and achieve their goals through
          technology and creativity.
        </p>
      </header>

      <main className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="icon-wrapper" aria-hidden="true">
              {service.icon}
            </div>

            <h2 className="card-title">{service.title}</h2>

            <p className="card-description">{service.shortDesc}</p>

            <ul className="feature-list">
              {service.features.map((feature, index) => (
                <li className="feature-item" key={index}>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="card-btn"
              onClick={() => setSelectedService(service)}
            >
              Learn More
            </button>
          </article>
        ))}
      </main>

      {selectedService && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <section
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="close-btn"
              aria-label="Close dialog"
              onClick={() => setSelectedService(null)}
            >
              &times;
            </button>

            <h2 id="modal-title" className="modal-title">
              {selectedService.icon} {selectedService.title}
            </h2>

            <p className="modal-body">{selectedService.fullDesc}</p>

            <h3 style={{ marginBottom: '1rem', color: '#0f172a' }}>
              What I Offer
            </h3>

            <ul className="feature-list">
              {selectedService.features.map((feature, index) => (
                <li className="feature-item" key={index}>
                  {feature}
                </li>
              ))}
            </ul>

            <a href="/contact" className="action-btn">
              Contact Me
            </a>
          </section>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;

