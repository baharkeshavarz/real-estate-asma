"use client";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  register: any;
  error: any;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, type= "text", register, error }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="small-medium"
      >
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
      />
      {error && (
        <p className="flex-start py-2 text-[0.7rem] text-red-500">
           {error ? error.message : ""}
        </p>
      )}
    </div>
  );
};

export default FormInput;
