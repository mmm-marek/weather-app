type InputProps = {
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChangeHandler: (e: any) => void;
};

const Input = ({
    type,
    name,
    placeholder,
    onChangeHandler,
    value,
}: InputProps) => {
    return (
        <>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChangeHandler}
                value={value}
            />
        </>
    );
};
export default Input;
