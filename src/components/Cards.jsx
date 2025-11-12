import React from "react";
// Rasmlarni import qildik
import Card1 from "../assets/img/card1.jpg"; // Bu rasm birinchi va uchinchi kartochka uchun ishlatiladi
import Card2 from "../assets/img/card2.jpg"; // Bu rasm ikkinchi kartochka uchun ishlatiladi

// Eslatma: Rasmda aslida 4 ta karta bor. Men siz bergan Card1 va Card2 importlarini
// ikkita karta uchun ishlatdim. Agar boshqa rasmlar kerak bo'lsa, ularni ham import qiling.

const Cards = () => {
  return (
    <section className="case-studies-section">
      {/* ======================== SARLAVHA QISMI ======================== */}
      <div className="section-header">
        <p className="header-subtitle">OUR PROJECTS</p>
        <h2 className="header-title">Case studies</h2>
        <p className="header-description">
          When it comes to creating a high quality website and adjusting the
          marketing strategy, experience matters a lot. Explore our portfolio to
          view some of the projects we've successfully completed.
        </p>
      </div>

      {/* ======================== LOYIHALAR GALEREYASI ======================== */}
      <div className="projects-gallery">
        {/* === LOYIHA KARTOCHKASI 1: Rasmning chap tomonidagi birinchi karta === */}
        {/* Asl rasmda bu kartaning chap tomoni kesilgan, men uni Card1 bilan to'ldirdim */}
        <div className="project-card">
          <div className="card-image-wrapper">
            <img
              src={Card1} // Birinchi karta uchun Card1 ishlatildi
              alt="Assemble Modular Houses Project"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <div className="card-tags">
              <span className="tag-item">WORDPRESS</span>{" "}
              {/* Rasmda ko'rinmaydi, misol uchun */}
              <span className="tag-item">PWA</span>{" "}
              {/* Rasmda ko'rinmaydi, misol uchun */}
            </div>
            <h3 className="card-title">Assemble modular houses project</h3>
          </div>
        </div>

        {/* === LOYIHA KARTOCHKASI 2: Rasmning chapdan ikkinchi kartasi === */}
        <div className="project-card">
          <div className="card-image-wrapper">
            <img
              src={Card1} // Rasmda odam bor karta, Card1 ga o'xshash
              alt="Software Development Website"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <div className="card-tags">
              <span className="tag-item">WORDPRESS</span>
              <span className="tag-item">DIVI</span>
            </div>
            <h3 className="card-title">
              Modern look for the software development company
            </h3>
          </div>
        </div>

        {/* === LOYIHA KARTOCHKASI 3: Rasmning chapdan uchinchi kartasi === */}
        <div className="project-card">
          <div className="card-image-wrapper">
            <img
              src={Card2} // Rasmda ofis ichi bor karta, Card2 ga o'xshash
              alt="Modular Houses Enterprise Website"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <div className="card-tags">
              <span className="tag-item">BUILDING STYLE GUIDE</span>
              <span className="tag-item">REACT</span>
            </div>
            <h3 className="card-title">
              Corporate website for an assemble modular houses enterprise
            </h3>
          </div>
        </div>

        {/* === LOYIHA KARTOCHKASI 4: Rasmning o'ng tomonidagi oxirgi karta === */}
        {/* Asl rasmda bu kartaning o'ng tomoni kesilgan, men uni Card1 bilan to'ldirdim */}
        <div className="project-card">
          <div className="card-image-wrapper">
            <img
              src={Card1} // Oxirgi karta uchun Card1 ishlatildi
              alt="Another Modular Houses Website"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <div className="card-tags">
              <span className="tag-item">WORDPRESS</span>{" "}
              {/* Rasmda ko'rinmaydi, misol uchun */}
              <span className="tag-item">PWA</span>{" "}
              {/* Rasmda ko'rinmaydi, misol uchun */}
            </div>
            <h3 className="card-title">
              Corporate website for modular houses enterprise
            </h3>
          </div>
        </div>
      </div>

      {/* ======================== FOOTER QISMI ======================== */}
      <div className="section-footer">
        <button className="see-more-button">See more</button>
      </div>
    </section>
  );
};

export default Cards;
