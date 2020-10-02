import React from 'react';

class infoform extends React.Component
{
   constructor()
   {
       super();
       this.state = {
           _id:"",
           Name:"",
           Age:"",
           City:"",
           isEdit:false
       }
   }
       infoChange = event =>
       {
           const {name,value} = event.target;
            this.setState({
                [name] : value
            })
       }
        infoSubmit = event =>
        {
            if(!this.state.isEdit)
            {
           
            let data = {
                isEdit:this.state.isEdit,
                Name:this.state.Name,
                Age:this.state.Age,
                City:this.state.City
            }
            this.props.myData(data);
        }
        else{
            let data = {
                isEdit:this.state.isEdit,
                _id:this.state._id,
                Name:this.state.Name,
                Age:this.state.Age,
                City:this.state.City

            }
            this.props.myData(data);
        }
        
        }

        componentWillReceiveProps(props){
            if(props.setForm._id != null)
            {
                this.setState({
                    _id:props.setForm._id,
                    Name:props.setForm.Name,
                    Age:props.setForm.Age,
                    City:props.setForm.City,
                    isEdit:true

                })
            }
        }
   
    render()
    {       
        return(

            <form onSubmit={this.infoSubmit} autoComplete="off">
                <div className="form-group">
                    <label for="exampleInputName">Enter the Name</label>
                    <input type="text" className="form-control" id="name"
                    onChange = {this.infoChange}
                    name ="Name"
                    value = { this.state.Name}

                    />
                
                </div>
                <div class="form-group">
                    <label for="exampleInputAge">Enter the Age</label>
                    <input type="text" className="form-control" id="age" 
                     onChange = {this.infoChange}
                     name ="Age"
                     value = { this.state.Age}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputCity">Enter the City</label>
                    <input type="text" className="form-control" id="city"
                     onChange = {this.infoChange}
                     name ="City"
                     value = { this.state.City}
                    />
                </div>
        <button type="submit" className="btn btn-primary">{this.state.isEdit ? 'update' : 'create'} </button>
             </form>   
        )
    }

}


export default infoform;

