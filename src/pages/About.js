import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="main">
      <Header />
      <main className="main-about">
        <h1>Sobre Nós</h1>
        <p>
          Na Personal Fit, acreditamos que cada pessoa tem potencial para
          alcançar seus objetivos de saúde e bem-estar. Nossa missão é
          proporcionar serviços de alta qualidade com personal trainers
          dedicados.
        </p>
        <section>
          <h2>Quem Somos?</h2>
          <p>
            Uma equipe apaixonada por transformar vidas por meio da prática de
            exercícios físicos personalizados e orientados por profissionais
            qualificados.
          </p>
          <img
            src="/img/team.jpg"
            alt="Equipe Personal Fit"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          />
        </section>
        <section>
          <h2>Nossa Visão</h2>
          <p>
            Ser referência no mercado de serviços fitness, promovendo saúde,
            confiança e resultados duradouros para nossos clientes.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
