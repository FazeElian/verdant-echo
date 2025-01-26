// Styles
import "../assets/css/components/TitleSection.css";

// React icons
import { PiPlantFill } from "react-icons/pi";

const TitleSection = () => {
    return (
        <div className="cont-title-section">
            <div className="title-section">
                <PiPlantFill />
                Plantas
            </div>
        </div>
    )
}

export { TitleSection };