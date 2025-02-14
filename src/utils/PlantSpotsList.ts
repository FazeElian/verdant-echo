// Items images
import PlantSpot1Img from "../assets/img/plantpots/1.webp";
import PlantSpot2Img from "../assets/img/plantpots/2.webp";

// Type
import { GalleryItemsType } from "./PlantsList";

const PlantSpotsList: GalleryItemsType[] = [
    {
        id: "plant-spot-1",
        name: "Maceta 1",
        imgSrc: PlantSpot1Img,
        paragraph: "Material: Barro especial",
        price: "15.000",
        url: `/plants/`
    },
    {
        id: "plant-spot-2",
        name: "Maceta 2",
        imgSrc: PlantSpot2Img,
        paragraph: "Material: Barro especial",
        price: "12.000",
        url: `/plants/`
    },
    {
        id: "plant-spot-3",
        name: "Maceta 3",
        imgSrc: PlantSpot1Img,
        paragraph: "Material: Barro especial",
        price: "15.000",
        url: `/plants/`
    },
    {
        id: "plant-spot-4",
        name: "Maceta 4",
        imgSrc: PlantSpot2Img,
        paragraph: "Material: Barro especial",
        price: "11.000",
        url: `/plants/`
    },
]

export default PlantSpotsList;