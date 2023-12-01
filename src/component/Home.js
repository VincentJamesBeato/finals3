import Create from "./Create";
import List from "./List";

const Home = () => {
    return ( 
        <div className="container p-5">
            <div className="row">
                {/* <i class="fs-2 btn btn-outline-secondary bi bi-backspace-fill"></i>
                <br/> */}
                <div className="col">
                    <h2 style={{ fontFamily: 'Libre Baskerville, serif' }}>Add Journal</h2>
                    <Create />
                </div>
                <div className="col">
                    <h2 style={{ fontFamily: 'Libre Baskerville, serif' }}>My Journal List</h2>
                    <List/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;