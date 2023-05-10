import { useSelector } from "react-redux";
function ComponentC() {
    let myState = useSelector((state) => state.changeTheName)
    return(
        <div>
            <h2>Value shown by Component C</h2>
            <h3>{myState.name}</h3>
        </div>
    )
}
export default ComponentC;