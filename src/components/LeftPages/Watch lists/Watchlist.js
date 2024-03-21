import { useLocation } from "react-router";

const Watchlist = () => {
    let location = useLocation()
    let movies=location.state.product
    return (
        <div>
            {movies.map((movies) => (
                <div>
                <img src={movies.img} />
                    <p>{movies.name }</p>
                    </div>
             ))}
                    
        </div>
    )
}
export default Watchlist;