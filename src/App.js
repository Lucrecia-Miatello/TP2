import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
      <p>Ingrese texto: 
      <input type="text" name="valor1" />
      </p>

      </form>
    </div>
  );
}
function presion(e){
  e.preventDefault();
  const valor=(e.target.valor1.value);
alert ('este es tu mensaje: '+valor);
}
export default App;
