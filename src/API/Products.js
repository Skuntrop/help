import axios from "axios";

export async function getProductsInfo() {
    const response = await axios.get("http://localhost:8080/message");
    return response.data
}

export async function postProductInfo() {
    const response = await axios.post("", {

    })
}