function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
}) {
    return <button>{children}</button>;
}
export default Button;

/*For boolean values on props, if the value is true, 
 * you can just name the prop, and don't have to indicate "(prop) = ____".  
 * For false values, just don't include the prop at all*/