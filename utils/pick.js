/**
 * Create an object composed of the picked object properties
 * @param {Object} object - The source object from which to pick properties
 * @param {string[]} keys - An array of keys to pick from the source object
 * @returns {Object} - An object composed of the picked properties
 */
const pick = (object, keys) => {
  if (!object || !keys || keys.length === 0) {
    return {}; // Return an empty object if object is falsy or keys array is empty
  }

  return keys.reduce((obj, key) => {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      // Check if key exists in object before assigning
      return { ...obj, [key]: object[key] };
    }
    return obj; // Return original obj if key does not exist in object
  }, {});
};

module.exports = pick;
