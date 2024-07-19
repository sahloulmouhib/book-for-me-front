import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import en, { TranslationsType } from "./languages/en";

// Initialize i18n instance with different languages resources (en/en)
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    resources: {
      en: {
        translation: en,
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log("i18n error", err);
  });

/**
 * Returns the localized string defined in language files.
 * @param name the complete path to string key => Exp: actions.continue
 * @param params Custom json params if needed to inject custom data into strings.
 * @returns - Returns translated string based on name and params (from languages files)
 */
export function translate(name: TxKeyPath, params = {}): string {
  return i18n.t(name, params);
}

/**
 * Builds up valid key paths for translations.
 */
export type TxKeyPath = RecursiveKeyOf<TranslationsType>;
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (string | number)];
type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >;
}[keyof TObj & (string | number)];
type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text;
