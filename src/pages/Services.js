import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="main">
      <Header />
      <main className="main-services">
        <h1>Nossos Serviços</h1>
        <p>
          Oferecemos serviços personalizados para ajudar você a atingir seus
          objetivos de saúde e fitness.
        </p>
        <section className="section-personal">
          <h2>Personal Trainers</h2>
          <ul>
            <li>
              <h3>João Silva</h3>
              <p>
                Especialista em musculação e treinamento funcional. Atua na
                criação de treinos personalizados focados no ganho de força e
                definição muscular.
              </p>
            </li>
            <li>
              <h3>Maria Oliveira</h3>
              <p>
                Focada em bem-estar e emagrecimento saudável. Trabalha com
                treinos de alta intensidade e acompanhamento nutricional básico.
              </p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
