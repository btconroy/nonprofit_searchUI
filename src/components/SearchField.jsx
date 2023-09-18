import { useState, useRef } from 'react'
import './SearchField.css'

export default function SearchField(props) {
    
    const [inputValue, setInputValue] = useState('');
    const [advancedOptions, setAdvancedOptions] = useState(false);
    const nonprofitInput = useRef(null);
    const advanced = useRef(null);

    function getValue(event) {
        event.preventDefault();
        const value = nonprofitInput.current.value;
        return  setInputValue(value) 
    }

    function advancedSelect() {
        
        if(advancedOptions === false) {
            return  setAdvancedOptions(true); 
        } else {
            return  setAdvancedOptions(false);
        }
        
    }

    return (
    <div id='search-field__container'>
        <form>
            <label htmlFor='nonprofit'>Nonprofit Name</label>
            <input id="nonprofit" ref={nonprofitInput} name={'nonprofit'} type='text' placeholder='Search' />
            <input id="advanced-option" onClick={advancedSelect} ref={advanced} type="checkbox" />
            { advancedOptions ? <p>Options</p> : <div></div> }
            <input id="submit-btn" onClick={getValue} type='submit' />
        </form>   
    </div>
 )
}