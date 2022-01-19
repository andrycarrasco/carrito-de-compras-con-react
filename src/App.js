import './App.css';
import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Title from './components/Title'

class App extends Component{
  state = {
    productos: [
      {name: 'Tomate', price: 1250, img: '/productos/tomate.jpg'},
      {name: 'Arbejas', price: 1200, img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', price: 1500, img: '/productos/lechuga.jpg'}
    ],
    carro: [],
    esCarroVisible: false
  }
  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible});
  }
  agregarAlCarro = (producto) => {
    const {carro} = this.state
    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name ? ({...x, cantidad: x.cantidad++}) : x)
      return this.setState(newCarro)
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
       cantidad: 1,
      })
    })
  }
  render() {
    return (
       <div>
         <Navbar 
          carro={this.state.carro} 
          esCarroVisible={this.state.esCarroVisible} 
          mostrarCarro={this.mostrarCarro}/>
         <Layout>  
           <Title/>
          <Productos 
            productos = {this.state.productos}
            agregarAlCarro = {this.agregarAlCarro}
            />
         </Layout>
       </div>
    );
  }
}

export default App;
