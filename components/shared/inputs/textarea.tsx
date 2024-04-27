"use client"

interface TextareaInputProps {
  label: string
  name: string
  placeholder?: string
  register: any
  error: any
}

const TextareaInput: React.FC<TextareaInputProps> = ({
  label,
  name,
  placeholder = "",
  register,
  error
}) => {
  return (
    <>
      <label htmlFor={name} className="body-regular">
        {label}
      </label>
      <textarea
        id="message"
        {...register(name)}
        rows={4}
        className="text-secondary-900 mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        placeholder={placeholder}
      ></textarea>

      {error && (
        <p className="flex-start py-2 text-[0.7rem] text-red-500">
          {error ? error.message : ""}
        </p>
      )}
    </>
  )
}

export default TextareaInput
