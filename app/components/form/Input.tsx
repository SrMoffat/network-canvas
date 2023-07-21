import { InputProps } from '@/lib/types';

const labelClassName = 'block mb-2 text-sm font-medium';
const inputClassName = 'border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5';

const Input = ({ name, label, type, placeholder, ...props }: InputProps) =>
  <div key={name}>
    <label htmlFor={name} className={labelClassName}>{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      className={inputClassName}
      {...props}
    />
  </div>;

export default Input;
