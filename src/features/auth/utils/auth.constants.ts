export const userSignUprValidation = {
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
  `^(?=.*[a-z]{${userSignUprValidation.password.MIN_LOWERCASE},})(?=.*[A-Z]{${userSignUprValidation.password.MIN_UPPERCASE},})(?=.*\\d{${userSignUprValidation.password.MIN_NUMBERS},})(?=.*[${userSignUprValidation.password.SPECIAL_CHARACTERS}]{${userSignUprValidation.password.MIN_SYMBOLS},}).+$`
);
