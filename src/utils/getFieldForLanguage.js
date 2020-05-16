/**
 * @name getFieldForLanguage
 * @summary Returns translated field
 * @param {Object} node The whole object we're working on
 * @param {String} language Language to filter items by
 * @param {String} fieldName The field name we're retrieving translations for
 * @returns {String} Translated field, or first field if translation in provided language is not available.
 */
export default function getFieldForLanguage(node, language, fieldName) {
  const translatedFieldName = `${fieldName}ByLanguage`;

  if (language && node[translatedFieldName] && node[translatedFieldName].length) {
    const translatedField = node[translatedFieldName].find((translation) => translation.language === language);
    return (translatedField && translatedField.content) || null;
  }

  return node[fieldName];
}
