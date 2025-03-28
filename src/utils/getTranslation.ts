import translations from "@/config/translations";

export function getTranslation(
  key: string,
  lang: "arm" | "rus" | "en"
): string {
  const translation = translations[key as keyof typeof translations];
  if (translation) {
    return translation[lang] || translation["arm"];
  }
  console.warn(`Missing translation for key: "${key}" and lang: "${lang}"`);
  return key;
}
