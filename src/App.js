import logo from './logo.svg';
import './App.css';

function App() {
  const header = {
    color: 'red'
  }
  const heros = ['manna', 'shakib', 'rubel', 'shalman khan', 'shahrukh khan', 'tarek mahmud', 'hasan shikder', 'riad howlader'];
  const products=[
    {name:'Adobe Acrobat', price:'$45.99'},
    {name:'Photoshop', price:'$95.99'},
    {name:'Premiere Pro', price:'$55.99'},
    {name:'Illustrator', price:'$75.99'},
  ]

  return (
    <div className="App">
      <header className="App-header">

      <ul>
        {
          heros.map(hero => <li>{hero}</li>)
        }
        <br/>
        {
          products.map(product => <li>{product.name}</li>)
        }
        {
          products.map(product => <li>{product.price}</li>)
        }
      </ul>
        {
          products.map(product => <product product={product}></product>)
        }
        <Product product={products[0]}></Product>







      </header>
    </div>
  );
}


function Product(props){
  const productStyle={
    border:'1px solid red',
    backgroundColor:'gray',
    color:'white',
    borderRadious:'5px',
    width:'300px',
    height:'250px',
    textAlign:'left',
    padding:'20px',
    display:'inlineBlock'
  }
  const {name, price}= props.product;
  return(
    <div style={{display:'flex'}}>
      <div style={productStyle}>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <button style={{padding:'10px',fontSize:'20px'}}>Bey now</button>
      </div>
    </div>
  );
}

export default App;
