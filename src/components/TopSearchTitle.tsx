// Styles
import "../assets/css/components/TopSearchTitle.css";

// React icons
import { IoSearch } from "react-icons/io5";

// Type
type TopSearchTitleType = {
    title: string,
    placeholder: string
}

const TopSearchTitle = (props: TopSearchTitleType) => {
    return (
        <div className="top-search-title">
            <h2>{props.title}</h2>
            <div className="top-search-bar">
                <IoSearch />
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder={`Buscar ${props.placeholder}`}
                />
            </div>
        </div>
    )
}

export { TopSearchTitle };