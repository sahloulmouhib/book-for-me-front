import { UserRoleEnum } from "utils/enums";
import { CustomIconRadioButtonType } from "utils/types";
import WorkIcon from "@mui/icons-material/Work";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export const signUpValidation = {
  password: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 32,
    MIN_UPPERCASE: 1,
    MIN_LOWERCASE: 1,
    MIN_NUMBERS: 1,
    MIN_SYMBOLS: 1,
    SPECIAL_CHARACTERS: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  },
};

export const PASSWORD_REGEX = new RegExp(
  `^(?=.*[a-z]{${signUpValidation.password.MIN_LOWERCASE},})(?=.*[A-Z]{${signUpValidation.password.MIN_UPPERCASE},})(?=.*\\d{${signUpValidation.password.MIN_NUMBERS},})(?=.*[${signUpValidation.password.SPECIAL_CHARACTERS}]{${signUpValidation.password.MIN_SYMBOLS},}).+$`
);

export const USER_TYPE_RADIO_GROUP: CustomIconRadioButtonType[] = [
  {
    title: "User",
    image: PersonRoundedIcon,
    value: UserRoleEnum.User,
  },
  {
    title: "Company",
    image: WorkIcon,
    value: UserRoleEnum.CompanyOwner,
  },
];
