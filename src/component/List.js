import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const List = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/Journal')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("Would you like to delete?");
        if (confirm) {
            axios.delete(`http://localhost:8000/Journal/${id}`)
                .then(res => {
                    navigate('/home');
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div style={{ maxHeight: '500px', overflowY: 'auto', padding: '10px' }}>
            <div className="d-flex flex-column align-items-center">
                {data.map((d, i) => (
                    <div className="card bg-light bg-opacity-75 w-100 mb-3" key={i}>
                        <div className="card-header">
                            Journal {d.id}
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-0">
                                <h5 className="card-title">{d.title}</h5>
                                <p className="card-text">{d.date}</p>
                            </div>
                            <hr />
                            <p className="card-text">{d.description}</p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Link to={`/update/${d.id}`} className="btn btn-outline-warning btn-sm mx-3">Edit</Link>
                                <button onClick={() => handleDelete(d.id)} className="btn btn-outline-danger btn-sm">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;
