import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import Select from "react-select"
import { useState } from "react"
import FormInput from "../shared/inputs/input"
import { phoneRegex } from "@/lib/general"

const SelectLead = () => {
  const [leads, setLeads] = useState([])

  const leadSchema = z.object({
    lead: z.string(),
    name: z.string().min(6, "must be at least 6 chars"),
    family: z.string().min(6, "must be at least 6 chars"),
    mobile: z.string().regex(phoneRegex, "Invalid Number!"),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email.")
  })

  type LeadFormData = z.infer<typeof leadSchema>
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      lead: "",
      name: "",
      family: "",
      mobile: "",
      email: ""
    }
  })

  const onSubmit: SubmitHandler<LeadFormData> = async data => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="lead" className="small-medium">
            Lead
          </label>
          <div className="mt-3">
            <Select
              options={leads || []}
              onChange={() => {}}
              autoFocus={true}
              placeholder="Choose Your Lead"
              className="small-medium"
            />
          </div>

          {errors.lead && (
            <p className="flex-start py-2 text-[0.7rem] text-red-500">
              {errors.lead.message}
            </p>
          )}
        </div>

        <div className="mt-2">
          <FormInput
            name="name"
            label="Name"
            register={register}
            error={errors.name}
          />
        </div>

        <div className="mt-2">
          <FormInput
            name="family"
            label="Family"
            register={register}
            error={errors.family}
          />
        </div>

        <div className="mt-2">
          <FormInput
            name="mobile"
            label="Mobile"
            register={register}
            error={errors.mobile}
          />
        </div>

        <div className="mt-2">
          <FormInput
            name="email"
            label="Email"
            register={register}
            error={errors.email}
          />
        </div>

        <div className="mt-2">
          <button
            name="select-lead"
            type="submit"
            className="w-full cursor-pointer rounded-md bg-primary-500 px-4 py-2
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

export default SelectLead
