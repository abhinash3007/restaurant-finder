import { useEffect,useState } from "react"
import { FETCH_MENU_URL } from "../config";
const useRestuarants=(id)=>{
    const [restuarant, setRestuarant] = useState(null);
    useEffect(() => {
        getResTuarantInfo();
    }, [])
    async function getResTuarantInfo() {
        const data = await fetch(FETCH_MENU_URL+id);
        const json = await data.json();
        setRestuarant(json.data)
    }
    return restuarant;
    
}
export default useRestuarants;