import React, {useState} from "react";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Home = () => {

    const [tarea, setTarea] = useState("")
    const [listaTareas, setListaTareas] = useState([])

    function subirTarea(e) {
        if (e.key === 'Enter') {
            e.preventDefault();

            setListaTareas([
                ...listaTareas,
                tarea
            ]); // suma la nueva sin borrar lo anterior
            console.log(listaTareas);
            setTarea("");
        }

    }

    function eliminarElemento(id) {
        let sinEliminado = [];
        sinEliminado = listaTareas.filter((item,index) => {
            if (index !== id) {
                return item
            } 
        } )
        setListaTareas(sinEliminado);
    }

    return (
        <div>
            <div>
            <h1>Titulo</h1>
            </div>
            <div>
                <input type="text" className="form-control justify-content-center" id="formGroupExampleInput" placeholder="Example input placeholder"
                    value={tarea}
                    onChange={
                        (e) => setTarea(e.target.value)
                    }
                    onKeyDown={subirTarea}/>
            </div>
                <ul className="list-group list-group-flush">
					{listaTareas.map((item, id) => <li className = "list-group-item " key={id}>{item} <button type="button" class="btn btn-outline-primary float-end" onClick={()=> eliminarElemento(id)}>x</button></li> ) }
				</ul>

            </div>
    );
};

export default Home;


// validar que la entrada no este vacia cuando se hace click en un boton const
// AnyComponent = () => {
//     const [inputValue, setInputValue ] = useState('');
//     const validateInput = () => {
//       if(inputValue === "") alert("The input cannot be empty"));
//     }
//     return <div>
//         <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
//         <button onClick={validateInput}
//     </div>;
// }
