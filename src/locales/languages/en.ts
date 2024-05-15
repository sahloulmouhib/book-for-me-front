export const en = {
  errors: {
    server: "Something went wrong, please try again later",
  },
  date: {
    week_day: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
    },
  },

  auth: {
    sign_in: {
      title: "Sign in to your account",
      subtitle: "Welcome back! select a method to log in",
      email: "Email",
      password: "Password",
      sign_in: "Sign In",
      sign_up: "Sign Up",
      or: "or",
      sign_in_with: "Sign in with",
      sign_in_with_google: "Sign in with Google",
      no_account: "Don't have an account?",
      welcome_back: "Welcome back to the club!",
      sign_in_now: "Log in now to continue your journey",
      errors: {
        invalid_credentials: "Invalid credentials",
      },
    },
    sign_up: {
      title: "Create an account",
      subtitle: "Welcome! Let's create your account",
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      password: "Password",
      confirm_password: "Confirm Password",
      sign_up: "Sign Up",
      sign_in: "Sign In",
      or: "or",
      sign_up_with: "Sign up with",
      sign_up_with_google: "Sign up with Google",
      have_account: "Already have an account?",
      agree_to_terms: "I agree to all the Terms of Service",
      make_bookings: "Make your bookings with us !",
      start_journey: "Start your journey with us by creating an account",
      errors: {
        email_exists: "Email already exists",
      },
    },
  },
  company: {
    create_company: {
      name: "Name",
      description: "Description",
      image: "Logo or Image",
      upload_image: "Upload your company's logo or image",
    },
  },
  availability: {
    from: "From",
    to: "To",
    start_time_lower_than_end_time: "Start time must be lower than end time",
  },
  service: {
    price: "Price",
    title: "Title",
  },
  validation: {
    required: "{{field}} is required",
    string: {
      min: "{{field}} must contain at least {{min}} characters",
      max: "{{field}} must contain a maximum of {{max}} characters",
      regex: "The format of the field {{field}} is not valid",
    },
    number: {
      min_greater_than_max:
        "Please enter a maximum value greater than the minimum value",
      invalid: "{{field}} must be a number",
      min: "{{field}} must be greater than {{min}}",
      max: "{{field}} must be less than {{max}}",
      min_max: "{{field}} must be between {{min}} and {{max}}",
    },
    date: {
      max: "{{field}} must be less than or equal to {{max}}",
      min: "{{field}} must be greater than or equal to {{min}}",
    },
    password: {
      regex:
        "{{field}} must contain at least {{uppercase}} uppercase, {{lowercase}} lowercase, {{number}} number and {{special}} special characters",
      mismatch: "Confirm password does not match with password",
    },
  },
};
export default en;
export type TranslationsType = typeof en;
