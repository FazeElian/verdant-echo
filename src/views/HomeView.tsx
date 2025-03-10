// View components
import { BannerPlants } from "../components/BannerPlants"
import { TitleSection } from "../components/TitleSection"
import { Gallery } from "../components/Gallery"
import { ContactUs } from "../components/ContactUs";
import { Footer } from "../components/Footer";

// React icons
import { PiPlantFill } from "react-icons/pi";
import { RiPlantFill } from "react-icons/ri";

// Galleries items
import PlantsList from "../utils/PlantsList";
import PlantSpotsList from "../utils/PlantSpotsList";
import { ViewAllBtn } from "../components/ViewAllBtn";

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
            <ViewAllBtn url="plantspots" />

            {/* Contact */}
            <ContactUs />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default HomeView