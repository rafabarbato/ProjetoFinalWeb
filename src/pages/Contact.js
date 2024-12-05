import React, { useState } from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className="main">
      <Header />
      <main className="main-contact">
        <h1>Fale Conosco</h1>
        <p>Estamos prontos para ajudar você a começar sua jornada fitness.</p>
        <form onSubmit={handleSubmit}>
          <label className="text-name">
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-email">
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-message">
            Mensagem:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        <p>Email: contato@personalfit.com</p>
        <p>Telefone: (99) 99999-9999</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
