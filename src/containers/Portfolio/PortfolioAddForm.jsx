import {React, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react'; 
import './Portfolio.css'

export default function PortfolioAddForm() {
    const {id} = useParams();
    // console.log(id)
    const [inputs, setInputs] = useState({});

    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({
            ...values,[name]: value
        }))
    }
    const handleEditorChange = (event) => {
        console.log(
          'Content was updated:',
         inputs.content = event.target.getContent()
        );
      }
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs)
    }
    return (
        <div className='container'>
            <br />
            <h2>Add Portfolio</h2>
            <form onSubmit={handleSubmit}>
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input name='title' value={inputs.title || '' } onChange={handleChange} type="text" class="form-control"
                    id="exampleFormControlInput1" placeholder="Title" />
                <br />
                <label for="exampleFormControlInput1" class="form-label">Project Type</label>
                <select class="form-select" name='typeProject' onChange={handleChange}
                    value={inputs.typeProject || '' } aria-label="Default select example">

                    <option value="Mobile App" selected>Mobile App</option>
                    <option value="Web App">Web App</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                </select>
                <br />
                <label for="exampleFormControlInput1" class="form-label">Project Image</label>
                <div className="row">


                    <div className='col-sm'>
                        <input type="file" class="form-control" id="inputGroupFile02" />
                    </div>

                    <div className='col-sm'>
                        <p>Img Preview</p>
                    </div>
                </div>
                <br />

                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" placeholder='Description' name='description' onChange={handleChange}
                    value={inputs.description || '' } id="exampleFormControlTextarea1" rows="3"></textarea>
                <br />

                <button className='btn btn-success fbtn' type='submit'>Submit</button>
            </form>
            <div>
                {/* <h2>{inputs.title}</h2>
                <div>
                    {inputs.description}
                </div> */}
            </div>
        </div>
    )
}
