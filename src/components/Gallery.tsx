// Styles
import "../assets/css/components/Gallery.css";

// Plant img
import Plant1 from "../assets/img/plants/1.png";
import Plant2 from "../assets/img/plants/3.png";

// React icons
import { MdOutlineShoppingCart } from "react-icons/md";

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="item-gallery">
                <div className="img-item-gallery">
                    <img src={Plant1} alt="" />
                </div>
                <div className="content-item-gallery">
                    <a href="">Nombre planta</a>
                    <h3>Maceta: Nombre de maceta</h3>
                    <h4>$ 25.000</h4>
                    
                    <button className="btn btn-item-gallery">
                        <MdOutlineShoppingCart />
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <div className="item-gallery">
                <div className="img-item-gallery">
                    <img src={Plant2} alt="" />
                </div>
                <div className="content-item-gallery">
                    <a href="">Nombre planta</a>
                    <h3>Maceta: Nombre de maceta</h3>
                    <h4>$ 25.000</h4>
                    
                    <button className="btn btn-item-gallery">
                        <MdOutlineShoppingCart />
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <div className="item-gallery">
                <div className="img-item-gallery">
                    <img src={Plant1} alt="" />
                </div>
                <div className="content-item-gallery">
                    <a href="">Nombre planta</a>
                    <h3>Maceta: Nombre de maceta</h3>
                    <h4>$ 25.000</h4>
                    
                    <button className="btn btn-item-gallery">
                        <MdOutlineShoppingCart />
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <div className="item-gallery">
                <div className="img-item-gallery">
                    <img src={Plant2} alt="" />
                </div>
                <div className="content-item-gallery">
                    <a href="">Nombre planta</a>
                    <h3>Maceta: Nombre de maceta</h3>
                    <h4>$ 25.000</h4>
                    
                    <button className="btn btn-item-gallery">
                        <MdOutlineShoppingCart />
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <div className="item-gallery">
                <div className="img-item-gallery">
                    <img src={Plant1} alt="" />
                </div>
                <div className="content-item-gallery">
                    <a href="">Nombre planta</a>
                    <h3>Maceta: Nombre de maceta</h3>
                    <h4>$ 25.000</h4>
                    
                    <button className="btn btn-item-gallery">
                        <MdOutlineShoppingCart />
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <div className="item-gallery">
                <div className="img-item-gallery">
                    <img src={Plant2} alt="" />
                </div>
                <div className="content-item-gallery">
                    <a href="">Nombre planta</a>
                    <h3>Maceta: Nombre de maceta</h3>
                    <h4>$ 25.000</h4>
                    
                    <button className="btn btn-item-gallery">
                        <MdOutlineShoppingCart />
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <div className="item-gallery">
                <div className="img-item-gallery">
                    <img src={Plant1} alt="" />
                </div>
                <div className="content-item-gallery">
                    <a href="">Nombre planta</a>
                    <h3>Maceta: Nombre de maceta</h3>
                    <h4>$ 25.000</h4>
                    
                    <button className="btn btn-item-gallery">
                        <MdOutlineShoppingCart />
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <div className="item-gallery">
                <div className="img-item-gallery">
                    <img src={Plant2} alt="" />
                </div>
                <div className="content-item-gallery">
                    <a href="">Nombre planta</a>
                    <h3>Maceta: Nombre de maceta</h3>
                    <h4>$ 25.000</h4>
                    
                    <button className="btn btn-item-gallery">
                        <MdOutlineShoppingCart />
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export { Gallery };