import SearchBar from "./SearchBar"
import "./inicio.css"


const Inicio = () => {
console.log(import.meta.env.VITE_APIKEY_FIREBASE)
    return (
        <div className="home-page">
            <h1>¡Encuentra lo que buscas!</h1>
            <SearchBar/>
        </div>
    )
}

export default Inicio
