import './Colaborador.css';

const Colaborador = (props) => {
    console.log("Props recebidos no componente Colaborador:", props);

    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src='https://github.com/leandrosantos2018.png' alt='Leandro Santos'/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador;
