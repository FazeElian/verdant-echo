import { BannerPlants } from "../components/BannerPlants"
import { TitleSection } from "../components/TitleSection"
import { Gallery } from "../components/Gallery"

// React icons
import { PiPlantFill } from "react-icons/pi";
import { RiPlantFill } from "react-icons/ri";

// Galleries items
import PlantsList from "../utils/PlantsList";
import PlantSpotsList from "../utils/PlantSpotsList";

const HomeView = () => {
    return (
        <>
            <BannerPlants />

            {/* Plants */}
            <TitleSection
                svg={PiPlantFill}
                title="Plantas"
            />
            <Gallery Items={PlantsList}/>

            {/* Plant Spots */}
            <TitleSection
                svg={RiPlantFill}
                title="Macetas"
            />
            <Gallery Items={PlantSpotsList} />
        </>
    )
}

export default HomeView