import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
    // update
    const {id} = useParams();

    const [values, setValues] = useState({
        title: '',
        date: '',
        description: ''
    })

    useEffect(() => {
        axios.get('http://localhost:8000/Journal/'+ id)
        .then(res => {
            setValues(res.data);
        })
        .catch(err => console.log(err));
    }, [])
    
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8000/Journal/'+ id, values)
        .then(res => {
            console.log(res);
            navigate('/home')
        })
        .catch(err => console.log(err));
    }
    return ( 
        <div className="d-flex w-100 justify-content-center align-items-center" style={{height: '100vh'}}>
            
            <form onSubmit={handleUpdate} className="w-75 bg-light bg-opacity-50 card p-3">
                <div class="mb-3">
                    <label for="" class="form-label fw-bold">Journal Title</label>
                    <input type="text" class="form-control bg-light bg-opacity-75" name="" id="" placeholder="Enter journal title" value={values.title} onChange={e => setValues({...values, title: e.target.value})}/>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label fw-bold">Date</label>
                    <input type="date" class="form-control bg-light bg-opacity-75" name="" id="" value={values.date} onChange={e => setValues({...values, date: e.target.value})}/>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label fw-bold">Description</label>
                    <textarea class="form-control bg-light bg-opacity-75" name="" id="" rows="3" placeholder="Enter description" value={values.description} onChange={e => setValues({...values, description: e.target.value})}></textarea>
                </div>
                
                <div className='d-flex justify-content-end'>
                    <button type="submit" class="btn-sm btn btn-outline-primary">Update Journal</button>
                </div>
                
            </form>
            
        </div>
     );
}
 
export default Update;