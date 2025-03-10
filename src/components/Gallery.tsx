import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// Styles
import "../assets/css/components/Gallery.css";

// React icons
import { MdOutlineShoppingCart } from "react-icons/md";

// Types
import { GalleryItemsType } from "../utils/PlantsList";

type GalleryType = {
    Items: GalleryItemsType[]
}

const Gallery = (props: GalleryType) => {
    const showToast = () => {
        toast.success("Producto añadido al carrito")
    }

    return (
        <div className="gallery">
            {props.Items.map((item: GalleryItemsType) => (
                <motion.div
                    className="item-gallery"
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: .25,
                    }}
                >
                    <div className="img-item-gallery">
                        <img src={item.imgSrc} alt="" />
                    </div>
                    <div className="content-item-gallery">
                        <Link to={item.url + item.id}>{item.name}</Link>
                        <h3>{item.paragraph}</h3>
                        <h4>$ {item.price}</h4>
                        
                        <button className="btn btn-item-gallery" onClick={showToast}>
                            <MdOutlineShoppingCart />
                            Agregar al carrito
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export { Gallery };