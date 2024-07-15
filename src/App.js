import './componentes/Banner/Banner';
import Banner from './componentes/Banner/Banner';
import Formulario  from './componentes/formulario/index.js';
import { useState } from 'react';
import Time from './componentes/Time/index.js';





function App() {

  const times =[
    {
      nome: 'Inteligência Artificial',
      corPrimaria:'#82CFFA',
      corSecudaria:'#E8F8FF',
    },{
      nome: 'Back-End',
      corPrimaria:'#A6D157',
      corSecudaria:'#F0F8E2',
    },{
      nome: 'Front-End',
      corPrimaria:'#E06B69',
      corSecudaria:'#FDE7E8',
    } 
  ]


  const [colaboradores,setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores, setColaboradores])
  }

  return (
    <div className="App">
        <Banner/>
        <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        {times.map(time => <Time 
        corPrimaria={time.corPrimaria} 
        corSecudaria={time.corSecudaria}
         key={time.nome} nome={time.nome}
         colaboradores={colaboradores}/> )}
        
    </div>
   
  );
}

export default App;
