import { BannerPlants } from "../components/BannerPlants"
import { TitleSection } from "../components/TitleSection"
import { Gallery } from "../components/Gallery"

// React icons
import { PiPlantFill } from "react-icons/pi";
import { RiPlantFill } from "react-icons/ri";

const HomeView = () => {
    return (
        <>
            <BannerPlants />
            <TitleSection
                svg={PiPlantFill}
                title="Plantas"
            />
            <Gallery />
            <TitleSection
                svg={RiPlantFill}
                title="Macetas"
            />
        </>
    )
}

export default HomeView