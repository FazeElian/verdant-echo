import { Link } from "react-router-dom";

// Styles
import "../assets/css/components/BannerPlants.css";

// Images - icons
import Plant from "../assets/img/plants/plant-banner.png";

const BannerPlants = () => {
    return (
        <section className="banner-plants">
            <div className="txt-banner-plants">
                <h1>Entregando <b>Plantas</b></h1>
                <h1>Entregando <b>Felicidad</b></h1>

                <p>Descubre las plantas perfectas para tu hogar.
                    Cuídalas con amor, y ellas llenarán tu vida de frescura.
                </p>

                <Link to="/" className="btn btn-banner-plants">
                    Explorar Plantas
                </Link>
            </div>
            <div className="img-banner-plants">
                <img src={Plant} alt=""/>
            </div>
        </section>
    )
}

export { BannerPlants };