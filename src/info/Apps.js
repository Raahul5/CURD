import React from 'react';

import Infoform from './form.js';
import Infotable from './infotable';
import axios from 'axios';


class app extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            data:[],
            editData:[]
        }
    }
    create = data => {
        if(!data.isEdit)
        {
            axios.post("http://localhost:2500/info",data).then(res =>{
            this.getAll();
        })
       
        }
        else
        {
            axios.put("http://localhost:2500/info/update",data).then(res => {
                this.getAll();

            })
        }
       
        
    }
       componentDidMount()
       {
           this.getAll();
       } 
       getAll()
       {
          axios.get("http://localhost:2500/info").then(res =>{
              
              this.setState({
                  data:res.data
              })
          })
       } 
       update = data =>{
           console.log(data)
           this.setState({
            editData:data
        })
       }

       del = data => {
           console.log(data)
           var option = window.confirm(`sure want to delete ${data.Name}`)
           if(option)
           {
               axios.delete(`http://localhost:2500/info/del/${data._id}`).then(res => {
                   console.log(res);
                   this.getAll();
               }) 
           }
           
       }
    
       
    
    render()
    {
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-6">
                   <Infoform myData ={this.create} setForm={this.state.editData} />
                    </div>
                    <div className="col-6">
                    <Infotable getData = {this.state.data} setData = {this.update} del={this.del}/>
                    </div>
                </div>     
            </div>
        )
    }

}

export default app;