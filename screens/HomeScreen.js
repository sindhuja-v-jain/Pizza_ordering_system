import React from 'react';  
    
import axios from 'axios';  
import { Header } from 'react-native-elements';
;
export default class HomeScreen extends React.Component {  
  state = {  
    orders: []  
  }  
    
  componentDidMount() {  
    axios.get(`https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza`)  
      .then(res => {  
        const orders = res.data;  
        this.setState({ orders });  
      })  
  }  
    
  deleteRow(id, e){  
    axios.delete(`https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const orders = this.state.orders.filter(item => item.id !== id);  
        this.setState({ orders });  
      })  
    
  }  
    
  render() {  
    return (  
      

     
      <div>  
       
        
        <button onClick={()=>{this.props.navigation.navigate('WelcomeScreen')}}>logout</button>
        <button onClick={()=>{this.props.navigation.navigate('NewOrderScreen')}}>new order</button>
        <table className="table table-bordered">  
            <thead>  
              <tr>  
                  <th>Order_ID</th>  
                  <th>Crust</th>  
                  <th>Flavor</th>  
                  <th>Size</th>  
                  <th>Action</th>  
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.orders.map((order) => (  
                <tr>  
                  <td>{order.Order_ID}</td>  
                  <td>{order.Crust}</td>  
                  <td>{order.Flavor}</td>  
                  <td>{order.Size}</td>  
                  <td>  
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(order.id, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
     
    )  
  }  
}  
