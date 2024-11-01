import Cards from "./Cards";
import {useLocation, useNavigate} from "react-router-dom";

const testArray = [
    {
        testId: 1,
        title: 'SpecializedGoods1',
        description: "description1"
    },
    {
        testId: 2,
        title: 'SpecializedGoods2',
        description: "description2"
    },
    {
        testId: 3,
        title: 'SpecializedGoods3',
        description: "description3"
    }
]

function SpecializedGoods(){

    const navigate = useNavigate();
    let currLink = useLocation()

    function Navigating(title){
        navigate(`${currLink.pathname}/${title}`)
    }

    return(
        <div className="SpecializedGoods">
            <Cards cards={testArray} navigating={Navigating} />
        </div>
    )
}

export default SpecializedGoods;