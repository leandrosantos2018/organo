// import Button from '../Button/Button';
import Button from '../Button/Button';
import CampoTexto from '../CampoTexto';
import ListBox from '../ListBox';
import './formulario.css';

const Formulario = () => {



    return (
        <section className="Formulario">
            <form >
                <h2>Preencha os dados para criar o card do colaborador. </h2>
                <CampoTexto label="Nome:" placeholder="Digite Seu nome" />
                <CampoTexto label="Cargo:" placeholder="Digite Seu Cargo"/>
                <CampoTexto label="Image:" placeholder="Digite diretorio da Image" />
                <ListBox label="Time:" placeholder="selecione seu Time"/>
                <Button label="Criar Card" onclick={()=>console.log('cliquei')}/>             
            </form>

            {/* <Button label="Cadastrar" /> */}

        </section>
    )
}

export default Formulario