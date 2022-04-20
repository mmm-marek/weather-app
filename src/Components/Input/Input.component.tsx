type InputProps = {
    type: string;
    name: string;
    placeholder: string;
    onChangeHandler: (e: any) => void;
};

const Input = ({ type, name, placeholder, onChangeHandler }: InputProps) => {
    return (
        <>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </>
    );
};
export default Input;
