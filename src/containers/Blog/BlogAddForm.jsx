import {React, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react'; 
import '../Blog/blog.css'

export default function BlogAddForm() {
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
            <h2>Add Post</h2>
            <form onSubmit={handleSubmit}>
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input name='title' value={inputs.title || '' } onChange={handleChange} type="text" class="form-control"
                    id="exampleFormControlInput1" placeholder="Title" />
                    <br />

                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <Editor
                apiKey="fj57rnnn3icm0oilld8l3rpf74vynn204zuna7yyh8ye1k3q"
        // initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        name='content'
       
        onChange={handleEditorChange}
      />
                <br />

                <button className='btn btn-success fbtn' type='submit'>Submit</button>
            </form>
            <div>
                <h2>{inputs.title}</h2>
                <div>
                    {inputs.content}
                </div>
            </div>
        </div>
    )
}
