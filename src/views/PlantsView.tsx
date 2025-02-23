// View components
import { Gallery } from "../components/Gallery"
import { TopSearchTitle } from "../components/TopSearchTitle"

// Items
import PlantsList from "../utils/PlantsList"

const PlantsView = () => {
    return (
        <>
            <main className="page-content">
                <TopSearchTitle
                    title="Plantas"
                    placeholder="Planta"
                />
            </main>
            <Gallery Items={PlantsList} />
        </>
    )
}

export default PlantsView