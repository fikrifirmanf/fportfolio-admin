import React from 'react'
import DataTable, {memoize} from 'react-data-table-component';
import './blog.css'
import { getAll, getById } from '../../services/BlogServices';
import { useNavigate } from 'react-router-dom';


export default function Blog() {
    // const history = useNavigate();

    
    const navigate = useNavigate();
    // const handleClick = (id) => {
        
    // };
const columns =  [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
        wrap: true,
        maxWidth: "200px"
    },
    {
        name: 'Content',
        selector: row => row.body,
        wrap: true,
        maxWidth: "500px"
    },
    
    {
        name: 'Action',
        selector: row => row.action,
        key: "action",
        text: "Action",
        className: "action",
        
        // align: "right",
        center: true,
        sortable: false,
        // center: true,
        // wrap: true,
        right: true,
        cell: (record) => {
          return (
              <div>
                  <div className='row width-500'>
                      <div className='col col-sm'>
                          <button className="btn btn-warning btn-sm" onClick={()=>navigate(`add/${record.id}`)}
                              >
                              Edit
                          </button>,


                      </div>
                      <div className='col col-sm'>
                          <button className="btn btn-danger btn-sm" onClick={()=> {
                              onEdit(record.id);
                              }}
                              >
                              Delete
                          </button>
                      </div>
                  </div>
              </div>
          );
         },
        },
];
function onEdit(id){
    getById(id).then(resp=>console.log(resp))
}


    const [post, setPost] = React.useState(null);
    React.useEffect(()=>{
        getAll().then((resp)=>{
setPost(resp.data)

        })
        // console.log(fetchPost())
    },[])
    if (!post) return null;
    console.log(post)
    return (
        <div className='container'>
         
	<DataTable title="Post List" 
    columns={columns} 
    data={post} 
    theme="solarized" 
    selectableRows
    pagination />
        
        </div>
    )
}
