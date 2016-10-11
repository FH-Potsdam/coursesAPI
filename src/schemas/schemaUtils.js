export const hasLength = (value, expectedLength) =>
	String(value).length === expectedLength;

export const isYear = (value) => hasLength(value, 4);

export const isOneOf = (value, arrayOfExpectedValues) =>
	arrayOfExpectedValues.some((expectedValue) => expectedValue === value);

export const isInLengthRange = (value, minLength, maxLength) =>
	value.length >= minLength && value.length <= maxLength;

export const isInWordsRange = (value, minLength, maxLength) =>
	isInLengthRange(value.match(/\S+/g), minLength, maxLength);

export const isName = (value) => /^[\pL\-\ \']*$/g.test(value);
