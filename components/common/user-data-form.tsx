import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import Select from "react-select"
import { useState } from "react"
import FormInput from "../shared/inputs/input"
import { phoneRegex } from "@/lib/general"

const UserDataForm = () => {
  const [nationalities, setNationalities] = useState([])

  const leadSchema = z.object({
    nationality: z.string(),
    name: z.string().min(6, "must be at least 6 chars"),
    family: z.string().min(6, "must be at least 6 chars"),
    mobile: z.string().regex(phoneRegex, "Invalid Number!"),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email.")
  })

  type UserInfoFormData = z.infer<typeof leadSchema>
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserInfoFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      nationality: "",
      name: "",
      family: "",
      mobile: "",
      email: ""
    }
  })

  const onSubmit: SubmitHandler<UserInfoFormData> = async data => {
    console.log(data)
  }

  return (
    <div className="sm:px-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="lead" className="body-regular">
             Nationality:
          </label>
          <div className="mt-3">
            <Select
              options={nationalities || []}
              onChange={() => {}}
              autoFocus={true}
              placeholder="Choose Your Nationality"
              className="body-regular"
            />
          </div>

          {errors.nationality && (
            <p className="flex-start py-2 text-[0.7rem] text-red-500">
              {errors.nationality.message}
            </p>
          )}
        </div>

        <div className="mt-4">
          <FormInput
            name="name"
            label="First Name:"
            register={register}
            error={errors.name}
          />
        </div>

        <div className="mt-4">
          <FormInput
            name="family"
            label="Last Name:"
            register={register}
            error={errors.family}
          />
        </div>

        <div className="mt-4">
          <FormInput
            name="mobile"
            label="Mobile Number:"
            register={register}
            error={errors.mobile}
          />
        </div>

        <div className="mt-4">
          <FormInput
            name="email"
            label="Email Address:"
            register={register}
            error={errors.email}
          />
        </div>

        <div className="mt-4">
          <button
            name="user-data"
            type="submit"
            className="body-medium w-full cursor-pointer rounded-md bg-primary-500 px-4 py-2
                       tracking-wide text-gray-700 transition-colors duration-200 hover:bg-primary-900 hover:text-white
                     focus:bg-black focus:text-white focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserDataForm
