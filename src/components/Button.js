import className from 'classnames';


function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

    
    const classes = className(rest.className,'flex items-center px-3 py-1.5 border m-1', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-black bg-white text-black': secondary,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'border-green-500 bg-green-500 text-white':success,
        'rounded-full border-black': rounded,
        'bg-white border-black': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger
    });

    return (<button {...rest} className={ classes }>
        {children}
    </button>);
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true');
        }
    },
};

export default Button;

/*For boolean values on props, if the value is true, 
 * you can just name the prop, and don't have to indicate "(prop) = ____".  
 * For false values, just don't include the prop at all*/