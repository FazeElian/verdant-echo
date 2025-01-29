import { Link } from "react-router-dom";

// Styles
import { FaArrowRightLong } from "react-icons/fa6";

// React icons
import "../assets/css/components/ViewAllBtn.css";

type ViewAllBtnType = {
    url: string
}

const ViewAllBtn = (props: ViewAllBtnType) => {
  return (
        <div className="cont-btn-view-all">
            <Link to={props.url} className="btn btn-view-all">
                Ver todas
                <FaArrowRightLong />
            </Link>
        </div>
    )
}

export { ViewAllBtn };