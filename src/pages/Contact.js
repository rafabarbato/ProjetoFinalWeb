import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
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
        <main>
            <h1>Contato</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    E-mail:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Mensagem:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <button type="submit">Enviar</button>
            </form>
            <p>Email: contato@empresa.com</p>
            <p>Telefone: (99) 99999-9999</p>
        </main>
    );
};

export default Contact;
