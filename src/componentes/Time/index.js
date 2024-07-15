import Colaborador from '../Card';
import './Time.css'


const Time = (props) => {
    console.log("Props recebidos no componente Colaborador:", props);

    return (

        <section className='time' style={{ backgroundColor:props.corSecudaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            {props.colaboradores.map((colaborador,index) => <Colaborador key={index} nome={colaborador.nome} cargo={colaborador.cargo} />)}
            
            </section>
    )

}



export default Time;