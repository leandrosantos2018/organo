// import Button from '../Button/Button';
import Button from '../Botao/Button';
import CampoTexto from '../CampoTexto';
import ListBox from '../ListaSuspensa';
import './formulario.css';
import { useState } from 'react';

const Formulario = (props) => {

   

 
   
    const [nome, setNome]= useState('')
    const [cargo, setCargo]= useState('')
    const [imagem, setImage]= useState('')
    const [time, setTime]= useState('Back-end')

    const aoSalvar = (evento)=>{
        evento.preventDefault()
        props.aoColaboradorCadastrado(
            {
            nome,
            cargo,
            imagem,
            time
        }
        )
    }

    return (
        <section className="Formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador. </h2>
                <CampoTexto valor={nome} 
                aoAlterado={valor =>setNome(valor)} 
                obrigatorio={true} label="Nome:" placeholder="Digite Seu nome" />

                <CampoTexto
                valor={cargo} 
                aoAlterado={valor =>setCargo(valor)} 
                obrigatorio={true} label="Cargo:" placeholder="Digite Seu Cargo"/>
                
                <CampoTexto 
                 valor={imagem} 
                 aoAlterado={valor =>setImage(valor)} 
                 label="Image:" placeholder="Digite diretorio da Image" />
                
                <ListBox 
                valor={time} 
                aoAlterado={valor =>setTime(valor)} 
                obrigatorio={true} 
                itens={props.times} 
                label="Time:"
                 placeholder="selecione seu Time"/>
                
                <Button label="Criar Card" />             
            </form>

        </section>
    )
}

export default Formulario