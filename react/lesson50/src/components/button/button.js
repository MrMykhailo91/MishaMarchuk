import { Manipulation } from 'swiper'
import './button.css'

export const BUTTON_TYPES = {
    base: 'base',
    link: 'link_button',
    sumbit: 'submit_button'
}

const getButton = (type) => {
    return Object.keys(BUTTON_TYPES).find(el => el === type)
}

const Button = (props) => {
    const {type, onButtonClick, buttonText, filterType, itemsType} = props;

    const buttonName = getButton(type)
    const buttonClassName = buttonName ? `button_${buttonName}` : 'button'
    const isActiveClassName = itemsType === filterType ? 'button_active' : ''

    return (
        <button 
            className={buttonClassName + ' ' + isActiveClassName}
            onClick={() => onButtonClick(filterType)}
        >
            {buttonText}
        </button>  
    )
}

export default Button;