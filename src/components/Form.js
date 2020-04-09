import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
];

const Form = ({ setCategoria }) => {
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const handleSubmit = e => {
        e.preventDefault();

        setCategoria(categoria);
    }

    return (
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.heading}>Encuentra noticias por su categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Buscar"
                        />
                    </div>
                </form>                
            </div>

        </div>
    );
}
 
export default Form;