/**
 * @name getFieldForLanguage
 * @summary Returns translated field
 * @param {String} language Language to filter items by
 * @param {Array} fieldsByLanguage Fields by language array
 * @returns {String} Translated field, or first field if translation in provided language is not available.
 */
export default function getFieldForLanguage(language, fieldsByLanguage) {
  const translatedField = fieldsByLanguage.find((message) => message.language === language);
  return (translatedField && translatedField.content) || null;
}
