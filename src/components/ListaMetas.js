import React, { useState } from 'react';
import Metas from './Metas';
import '../style/Metas.css';

function ListaMetas() {
    const [metas, setMetas] = useState([]);
    const [nuevaMeta, setNuevaMeta] = useState('');

    const agregarMeta = () => {
        if (nuevaMeta.trim() === '') return;
        setMetas([...metas, { id: Date.now(), texto: nuevaMeta }]);
        setNuevaMeta('');
    };

    const eliminarMeta = (id) => {
        setMetas((prevMetas) => prevMetas.filter((nota) => nota.id !== id));
    };
    return (
        <div className='contenedor-principal'>
            <div className='contenedor-metas1'>
                <input
                    className="input"
                    type="text"
                    value={nuevaMeta}
                    onChange={(e) => setNuevaMeta(e.target.value)}
                    placeholder='Nueva Meta...'
                />
                    <button className='boton' onClick={agregarMeta}>Agregar Meta</button>
                        <p className='completas'>Completas: </p>
                        <p className='pendientes'>Pendientes: </p>
                        {metas.map((meta) => (
                        <Metas
                            key={meta.id}
                            meta={meta}
                            onDelete={eliminarMeta}
                        />
                    ))}   
                
            </div>
        </div>
    );
}

export default ListaMetas;