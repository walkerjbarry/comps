import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
/*the above check is to ensure that 'divEl' is visible, and not null. 
 * Should it be null, the handler will just return.  The if statement below
 *  closes the dropdown (via setIsOpen) if a user clicks outside of it*/

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };

    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        //CLOSE DROPDOWN
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
    return (
        <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
     );
  });
   

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer "
                onClick={handleClick}
            >
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    );
  };
/*the ref prop (from useRef) allows a component to have a reference to the specific html element created by it*/
export default Dropdown;
/* selection?.label ||'Select...'  is shorthand for  
 * 
 * let content = 'Select...'
    if(selection){
        content = selection.label;
    }               
    
    This will assign the default value of Select... to null and undefined
*/