import './ListBox.css';
import { useState } from 'react';

const ListBox = (props) => {

const [valorSelecionado, setValorSelecionado] = useState('');

const aoAlterarValor = (evento) => {
        const novoValor = evento.target.value;
        setValorSelecionado(novoValor);
        props.aoAlterado(novoValor); // Chame a função de callback passando o novo valor selecionado
      };


    return (
        <div className="ListBox">
            <label>{props.label}</label>
            <select 
            required={props.obrigatorio} 
            value={valorSelecionado}
            onChange={aoAlterarValor}
            class="form-select form-select-sm" aria-label="Small select example">
            
                <option select>Selecione uma opção</option>
                {props.itens.map(item =>{
                  return  <option value={props.valor} key={item}>{item}</option>
                })}
                               
            </select>
        </div>
    )

}


export default ListBox