"use client";
import FooterLink from "@/components/forms/footerLink";
import InputField from "@/components/forms/inputField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SignInPage = () => {
  const {
      register,
      handleSubmit,
      control,
      formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
      defaultValues: {
        fullName: "",
        email: "",
        password: "",
        country: "NEPAL",
        investmentGoals: "Growth",
        riskTolerance: "Medium",
        preferredIndustry: "Technology",
      },
  
      mode: "onBlur",
    });
  
    const onSubmit = async (data: SignUpFormData) => {
      try {
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
  return (
    <div className="mt-10">
      <h1 className="form-title">Log In Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
          validation={{ required: "Email is required",pattern:/^\S+@\S+$/i,message: "Invalid email address"}}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Logging In..." : "Log In"}
        </Button>

        <FooterLink text="Don't have a account?" linkText="Sign-Up" href="/sign-up" />
      </form>
    </div>
  )
}

export default SignInPage
