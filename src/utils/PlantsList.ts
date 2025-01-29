// Items images
import Plant1Img from "../assets/img/plants/1.png";
import Plant2Img from "../assets/img/plants/3.png";

// Type
export interface GalleryItemsType {
    id: string,
    name: string,
    imgSrc: string,
    paragraph: string,
    price: string,
    url: string
}

const PlantsList: GalleryItemsType[] = [
    {
        id: "plant-1",
        name: "Planta 1",
        imgSrc: Plant1Img,
        paragraph: "Maceta: Maceta 1",
        price: "15.000",
        url: `/plants/`
    },
    {
        id: "plant-2",
        name: "Planta 2",
        imgSrc: Plant2Img,
        paragraph: "Maceta: Maceta 2",
        price: "25.000",
        url: `/plants/`
    },
    {
        id: "plant-3",
        name: "Planta 3",
        imgSrc: Plant1Img,
        paragraph: "Maceta: Maceta 3",
        price: "35.000",
        url: `/plants/`
    },
    {
        id: "plant-4",
        name: "Planta 4",
        imgSrc: Plant2Img,
        paragraph: "Maceta: Maceta 4",
        price: "45.000",
        url: `/plants/`
    },
]

export default PlantsList;