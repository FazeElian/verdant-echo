// View components
import { Gallery } from "../components/Gallery"
import { TopSearchTitle } from "../components/TopSearchTitle"

// Items
import PlantSpotsList from "../utils/PlantSpotsList"

const PlantPotsView = () => {
    return (
        <>
            <main className="page-content">
                <TopSearchTitle
                    title="Macetas"
                    placeholder="Maceta"
                />
            </main>
            <Gallery Items={PlantSpotsList} />
        </>
    )
}

export default PlantPotsView