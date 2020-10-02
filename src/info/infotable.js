import React from 'react';

export default class infotable extends React.Component
{
  constructor()
  {
      super();
  }
  render()
  {
      return(
          <div>
        <table className="table">
        <thead className="thead-dark">
          <tr>
            
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
         {
            this.props.getData.length > 0 ?
            (
              this .props.getData.map(e =>
                <tr key = {e._id}>
                  <td>{e.Name}</td>
                  <td>{e.Age}</td>
                  <td>{e.City}</td>
                  <td><button className="btn btn-primary"
                  onClick ={Event => {
                    this.props.setData(e)
                  }}
                  >Edit</button></td>
                  <td><button className="btn btn-primary"
                  onClick ={Event => {
                    this.props.del(e)
                  }}
                  >Delete</button></td>
                </tr>
                )
            )
            :
            (
              <tr>
                <td>No data</td>
              </tr>
            )

         }
        </tbody>
      </table>
      </div>
      )
  }
}