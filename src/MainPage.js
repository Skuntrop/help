import {useNavigate} from "react-router-dom";
import Cards from "./Cards";
import {useEffect, useState} from "react";
import {getProductsInfo} from "./API/Products";

function MainPage() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsInfo().then(data => setProducts(data))
    }, [])

    function Navigating(title){
        navigate(`/${title}`)
    }

  return (
    <div className="MainPage">
        <Cards cards={products} navigating={Navigating}/>
    </div>
  );
}

export default MainPage;
