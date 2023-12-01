import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
import Update from "./Update";


const List = () => {
    const [data, setData] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/Journal')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    })

    const handleDelete = (id) => {
        const confirm = window.confirm("Would you like to delete?");
        if(confirm){
            axios.delete('http://localhost:8000/Journal/'+id)
            .then(res => {
                navigate('/home');
            })
            .catch(err => console.log(err));
        }
    }
    
    return ( 
        <div>
            <div className="d-flex flex-column align-items-center overflow-scroll">
                {
                    data.map((d, i) => (
                        <div class="card bg-light bg-opacity-75 w-100 mb-3" key={i}>
                            <div class="card-header">
                                Journal {d.id}
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-0">
                                    <h5 class="card-title">{d.title}</h5>
                                    <p class="card-text">{d.date}</p>
                                </div>
                                <hr/>
                                <p class="card-text">{d.description}</p>
                                <hr/>
                                <div class="d-flex justify-content-end">
                                    {/* <Link to={`/read/${d.id}`} class="btn btn-primary btn-sm">View</Link> */}
                                    <Link to={`/update/${d.id}`} class="btn btn-outline-warning btn-sm mx-3">Edit</Link>

                                    <button onClick={e => handleDelete(d.id)} class="btn btn-outline-danger btn-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default List;