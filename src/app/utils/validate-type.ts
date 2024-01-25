/**
 * Validates if an object has the expected shape with specific types for its properties.
 *
 * @param obj - The object to validate.
 * @param expectedShape - An object that defines the expected types for each property of the object.
 * @returns A boolean indicating whether the object matches the expected shape.
 *
 * @example
 * ```typescript
 * const user = {
 *   id: '123',
 *   name: 'John Doe',
 *   age: 25,
 * };
 *
 * const expectedShape = {
 *   id: 'string',
 *   name: 'string',
 *   age: 'number',
 * };
 *
 * if (validateObject(user, expectedShape)) {
 *   console.log('The object is valid.');
 * } else {
 *   console.log('The object does not have the expected shape.');
 * }
 * ```
*/

export function validateObject<T> (obj: any, expectedShape: Record<keyof T, string | number | object>): obj is T {
  for (const key in expectedShape) {
    const expectedType = expectedShape[key]
    if (!(key in obj)) {
      return false
    }
    // eslint-disable-next-line valid-typeof
    if (typeof obj[key] !== expectedType) {
      return false
    }
  }

  const objKeys = Object.keys(obj as object)
  if (objKeys.length !== Object.keys(expectedShape).length) {
    return false
  }

  return true
}
