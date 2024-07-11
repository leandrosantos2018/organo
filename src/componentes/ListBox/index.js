import './ListBox.css';

const ListBox = (props) => {

    console.log(props)
    return (
        <div className="ListBox">
            <label>{props.label}</label>
            <select class="form-select form-select-sm" aria-label="Small select example">
                <option selected>Selecione uma opção</option>
                <option value="1">Central de Soluções</option>
                <option value="2">Desenvolvimento</option>
                <option value="3">Back-end</option>
            </select>
        </div>
    )

}


export default ListBox