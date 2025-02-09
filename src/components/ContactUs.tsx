// Styles
import "../assets/css/components/ContactUs.css";

// React icons
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { PiFacebookLogoBold } from 'react-icons/pi';

// Framer motion
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="contact-data">
                <h1>Datos de Contacto</h1>
                <p>No dudes en contactarnos en cualquier momento. ¡Estamos aquí para ayudarte y te responderemos lo antes posible!</p>

                <h2>Correo Electrónico</h2>
                <h3>verdant-echo@gmail.com</h3>

                <h2>Número Celular</h2>
                <h3>+57 333 3333333</h3>

                <div className="contact-data-icons">
                    <motion.a
                        href="https://www.whatsapp.com/"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: .25,
                        }}
                    >
                        <FaWhatsapp />
                    </motion.a>
                    <motion.a
                        href="https://www.facebook.com/"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: .25,
                        }}
                    >
                        <PiFacebookLogoBold />
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: .25,
                        }}
                    >
                        <FaInstagram />
                    </motion.a>
                </div>
            </div>
            <form action="" className="contact-form" method="POST">
                <h1>Envíanos un mensaje</h1>

                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre completo"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@email.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Asunto de Contacto</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Motivo de contacto"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Deja tu mensaje aquí..."
                    />
                </div>
                <button type="submit" className="btn btn-submit">Enviar mensaje</button>
            </form>
        </div>
    )
}

export { ContactUs };