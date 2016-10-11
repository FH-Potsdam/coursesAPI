export const hasLength = (value, expectedLength) =>
	String(value).length === expectedLength;

export const isYear = (value) => hasLength(value, 4);

export const isOneOf = (value, arrayOfExpectedValues) =>
	arrayOfExpectedValues.some((expectedValue) => expectedValue === value);
