import NumberFormat from 'react-number-format'

export const sanitizeInput = (input: string): string => {
  const trimmed = input.trim().replaceAll('/D+-/g', '');
  const regex = /.{1,3}/g;
  if (trimmed.charAt(1) !== '-') {
    const asd = trimmed.match(regex);
    return asd ? asd.join('-') : '';
  }
  return trimmed;
};
