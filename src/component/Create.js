import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Create = () => {
    const [values, setValues] = useState({
        title: '',
        date: '',
        description: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/Journal', values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit} className="w-75 bg-light bg-opacity-75 card p-3">
                <div class="mb-3">
                    <label for="" class="form-label fw-bold">Journal Title</label>
                    <input type="text" class="form-control bg-light bg-opacity-75" name="" id="" placeholder="Enter journal title" onChange={e => setValues({...values, title: e.target.value})}/>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label fw-bold">Date</label>
                    <input type="date" class="form-control bg-light bg-opacity-75" name="" id="" onChange={e => setValues({...values, date: e.target.value})}/>
                </div>

                <div class="mb-3">
                    <label for="" class="form-label fw-bold">Description</label>
                    <textarea class="form-control bg-light bg-opacity-75" name="" id="" rows="3" placeholder="Enter description" onChange={e => setValues({...values, description: e.target.value})}></textarea>
                </div>
                
                <div className='d-flex justify-content-end'>
                    <button type="submit" class="btn-sm btn btn-outline-primary">Submit</button>
                </div>
                
            </form>
        </div>
     );
}
 
export default Create;