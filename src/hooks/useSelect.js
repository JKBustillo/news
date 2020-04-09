import React, { useState } from 'react';

const useSelect = (initialState, options) => {
    const [state, setState] = useState("");
    const SelectNoticias = () => (
        <select
            className="browser-default"
        >
            <option value="">Seleccione</option>
        </select>
    )
    return [state, SelectNoticias];
}
 
export default useSelect;