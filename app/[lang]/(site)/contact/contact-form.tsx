"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { phoneRegex } from "@/lib/general"
import { useTranslations } from "next-intl"
import FormInput from "@/components/shared/inputs/input"
import { HiPaperAirplane } from "react-icons/hi"
import TextareaInput from "@/components/shared/inputs/textarea"

const ContactForm = () => {
  const t = useTranslations()
  const leadSchema = z.object({
    name: z
      .string()
      .min(
        2,
        `${t("formErrors.mustBeAtLeast")} 2 ${t("formErrors.characters")}`
      ),
    mobile: z.string().regex(phoneRegex, t("formErrors.invalidPhoneNumber")),
    email: z
      .string()
      .min(1, { message: t("formErrors.isRequired") })
      .email(t("formErrors.invalidEmail")),
    subject: z
      .string()
      .min(
        2,
        `${t("formErrors.mustBeAtLeast")} 2 ${t("formErrors.characters")}`
      ),
    message: z
      .string()
      .min(
        2,
        `${t("formErrors.mustBeAtLeast")} 2 ${t("formErrors.characters")}`
      )
  })

  type UserInfoFormData = z.infer<typeof leadSchema>
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserInfoFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: ""
    }
  })

  const onSubmit: SubmitHandler<UserInfoFormData> = async data => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid-cols-1 gap-2 sm:grid md:grid-cols-2"
    >
      <div>
        <FormInput
          name="name"
          label={`${t("forms.name")}:`}
          register={register}
          error={errors.name}
        />
      </div>
      <div>
        <FormInput
          name="email"
          label={`${t("forms.emailAddress")}:`}
          register={register}
          error={errors.email}
        />
      </div>
      <div>
        <FormInput
          name="mobile"
          label={`${t("forms.mobileNumber")}:`}
          register={register}
          error={errors.mobile}
        />
      </div>
      <div>
        <FormInput
          name="subject"
          label={`${t("pages.contact.subject")}:`}
          register={register}
          error={errors.subject}
        />
      </div>
      <div className="col-span-2 pt-5">
        <TextareaInput
          name="message"
          label={`${t("pages.contact.message")}:`}
          placeholder={t("pages.contact.messagePlaceholder")}
          register={register}
          error={errors.message}
        />
      </div>

      <div className="flex-center col-span-2 mt-4">
        <button
          name="user-data"
          type="submit"
          className="flex-center body-medium w-full cursor-pointer rounded-md bg-primary-500 px-4 py-2
                       tracking-wide text-gray-700 transition-colors duration-200 hover:bg-primary-900 hover:text-white
                     focus:bg-black focus:text-white focus:outline-none"
        >
          <HiPaperAirplane size={22} className="rotate-45" />
          {t("forms.submit")}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
