import { useState, useRef } from 'react'
import './SearchField.css'

const stateArr = ['-- No State Selected --', 'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
const nteeArr = ['-- No Category Selected --', 'Arts, Culture &amp; Humanities', 'Education', 'Environment and Animals', 'Health', 'Human Services', 'International, Foreign Affairs', 'Public, Societal Benefit', 'Religion Related', 'Mutual/Membership Benefit', 'Unknown, Unclassified'];
const taxCodeArr = [{code: '-- No Tax Section Selected --', taxValue: null}, {code: '501(c)(2)', taxValue: '2'}, {code: '501(c)(3)', taxValue: '3'},  {code: '501(c)(4)', taxValue: '4'}, {code: '501(c)(5)', taxValue: '5'}, {code: '501(c)(6)', taxValue: '6'}, {code: '501(c)(7)', taxValue: '7'}, {code: '501(c)(8)', taxValue: '8'}, {code: '501(c)(9)', taxValue: '9'}, {code: '501(c)(10)', taxValue: '10'}, {code: '501(c)(11)', taxValue: '11'}, {code: '501(c)(12)', taxValue: '12'}, {code: '501(c)(13)', taxValue: '13'}, {code: '501(c)(14)', taxValue: '14'}, {code: '501(c)(15)', taxValue: '15'}, {code: '501(c)(16)', taxValue: '16'}, {code: '501(c)(17)', taxValue: '17'}, {code: '501(c)(18)', taxValue: '18'}, {code: '501(c)(19)', taxValue: '19'}, {code: '501(c)(21)', taxValue: '21'}, {code: '501(c)(22)', taxValue: '22'}, {code: '501(c)(23)', taxValue: '23'}, {code: '501(c)(25)', taxValue: '25'}, {code: '501(c)(26)', taxValue: '26'}, {code: '501(c)(27)', taxValue: '27'}, {code: '501(c)(28)', taxValue: '28'}, {code: '4947(a)(1)', taxValue: '92'}]

export default function SearchField(props) {
    
    const [inputValue, setInputValue] = useState({});
    const [advancedOptions, setAdvancedOptions] = useState(false);
    const advanced = useRef(null);

    const searchStrInput = useRef(null);
    const stateInput = useRef(null);
    const nteeInput = useRef(null);
    const taxCodeInput = useRef(null);

    function getValue(event) {
        event.preventDefault();
        const stateStr = stateInput.current.value === '-- No State Selected --' ? null : stateInput.current.value;
        const nteeStr = nteeInput.current.value === 0 ? null : nteeInput.current.value;
        const value = {
            query: searchStrInput.current.value,
            state: stateStr,
            ntee: nteeStr,
            taxCode: taxCodeInput.current.value
        };
        return setInputValue(value); 
    }

    function advancedSelect() {
        
        if(advancedOptions === false) {
            return  setAdvancedOptions(true); 
        } else {
            return  setAdvancedOptions(false);
        }
        
    }

    function advancedOptionsActive(bool) {
        if(bool) {
            return (
            <div id="advanced-option__container">
                <label className="advanced-labels" htmlFor="state">Choose a state:</label>
                <select ref={stateInput} id="state" className="adv-options" name="state">
                    { stateArr.map( (s, index) => <option key={index} value={s}>{s}</option>) } 
                </select>
                <br />
                <label className="advanced-labels" htmlFor="ntee">Choose a NTEE Category:</label>
                <select ref={nteeInput} id="ntee" className="adv-options" name="ntee">
                    { nteeArr.map( (ntee, index) => <option key={index} value={index}>{ntee}</option>) } 
                </select>
                <label className="advanced-labels" htmlFor="tax-code">Choose a Tax Section:</label>
                <select ref={taxCodeInput} id="tax-code" className="adv-options" name="tax-code">
                    { taxCodeArr.map( (tax, index) => <option key={index} value={tax.taxValue}>{tax.code}</option>) } 
                </select>
            </div>
            )
        } else {
            <div></div>
        }
    }

    return (
    <div id='search-field__container'>
        <h1>Nonprofit Search</h1>
        <form>
            <label id="search-label" htmlFor='nonprofit'>Search</label>
            <input id="nonprofit" ref={searchStrInput} name={'nonprofit'} type='text' placeholder='Search' />
            <input id="advanced-option" onClick={advancedSelect} ref={advanced} type="checkbox" />
            { advancedOptionsActive(advancedOptions) }
            <input id="submit-btn" onClick={getValue} type='submit' />
        </form>   
    </div>
 )
}