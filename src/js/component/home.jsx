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

    return (
        <div className="text-center">
            <h1>Titulo</h1>
            <div className="mb-3">
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"
                    value={tarea}
                    onChange={
                        (e) => setTarea(e.target.value)
                    }
                    onKeyDown={subirTarea}/>
            </div>
            <div className="conteiner d-flex justify-content-center">
                <ul className="list-group list-group-flush">
					
				</ul>

            </div>
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
