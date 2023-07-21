
const inputClassName = 'border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
const labelClassName = "block mb-2 text-sm font-medium";

interface InputProps {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

const Input = ({ name, label, type, placeholder }: InputProps) => (
    <div key={name}>
        <label htmlFor={name} className={labelClassName}>{label}</label>
        <input type={type} name={name} id={name} className={inputClassName} placeholder={placeholder} />
    </div>
)

export default Input;
