const Button = ({ children, className, onClick }) => {
    return (
        <button className={`px-[40px] py-[16px] rounded-full bg-secondary text-background text-lg ${className} `} onClick={onClick}>{children}</button>
    )
}

export default Button