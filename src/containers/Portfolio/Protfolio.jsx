import React from 'react'
import './Portfolio.css'
import DataTable, {memoize} from 'react-data-table-component';
import { deleteRequest, getAll, getById } from '../../services/PortfolioServices';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Protfolio() {
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
        name: 'Description',
        selector: row => row.description,
        wrap: true,
        maxWidth: "500px"
    },
    {
        name: 'Type',
        selector: row => row.typeProject,
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
                          <button className="btn btn-warning" onClick={()=>navigate(`edit/${record._id}`)}
                              >
                             <FontAwesomeIcon icon={faEdit} />
                          </button>,


                      </div>
                      <div className='col col-sm'>
                          <button className="btn btn-danger" onClick={()=> {
                              onDelete(record._id);
                              }}
                              >
                              <FontAwesomeIcon icon={faTrash} />
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

function onDelete(id){
    deleteRequest(id).then(resp =>{console.log(resp)
    if(resp.status == 200){
        fetchData()
    }
    })
}


    const [post, setPost] = React.useState(null);
    function fetchData(){
        getAll().then((resp)=>{
            setPost(resp.data.data)
            
                    })
    }
    React.useEffect(()=>{
        fetchData()
        // console.log(fetchPost())
    },[])
    if (!post) return null;
    console.log(post)
    return (

        <div className='container'>
            <br />
            
         <h2>Portfolio List</h2>
         <br />
         <button className='btn btn-primary' onClick={()=>navigate(`add`)}><FontAwesomeIcon icon={faPlus} /> Add Portfolio</button>
         <br />
	<DataTable
    columns={columns} 
    data={post} 
    theme="solarized" 
    selectableRows
    pagination />
        
        </div>
    )
}
