import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="main">
      <Header />
      <main className="main-home">
        <h1>Bem-vindo à Personal Fit!</h1>
        <p>
          Transforme sua vida com treinos personalizados. Nós ajudamos você a
          atingir seus objetivos de saúde e fitness!
        </p>
        <img
          src="/img/fitness.jpg"
          alt="Imagem inspiradora de fitness"
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <section>
          <h2>Por que escolher nossos serviços?</h2>
          <ul>
            <li>Equipe qualificada e experiente</li>
            <li>Planos adaptados às suas necessidades</li>
            <li>Treinos motivadores e eficazes</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
