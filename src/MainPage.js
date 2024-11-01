import {useNavigate} from "react-router-dom";
import Cards from "./Cards";

const testArray = [
    {
        testId: 1,
        title: 'title1',
        description: "description1"
    },
    {
        testId: 2,
        title: 'title2',
        description: "description2"
    },
    {
        testId: 3,
        title: 'title3',
        description: "description3"
    }
]

function MainPage() {
    const navigate = useNavigate();

    function Navigating(title){
        navigate(`/${title}`)
    }

  return (
    <div className="MainPage">
        <Cards cards={testArray} navigating={Navigating}/>
    </div>
  );
}

export default MainPage;
