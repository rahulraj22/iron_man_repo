import { useSelector, useDispatch } from "react-redux";
import { change } from "../actions/index";
import '../styles/componentB.css'

function ComponentB() {
    let myState = useSelector((state) => state.changeTheName);
    let dispatch = useDispatch();
    const handleChange = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <h1 id="header">STEMpedia: Task 1</h1>
            <h2>Input value taken via Component B</h2>
            <form onSubmit={handleChange}>
                <label htmlFor="" id="label">InputValue:</label>
                <input type="text" name="name" />
                <input type="submit" value="Submit" onClick={() => dispatch(change(document.getElementsByName('name')[0].value))} />
            </form>
        </div>
    )
}
export default ComponentB;