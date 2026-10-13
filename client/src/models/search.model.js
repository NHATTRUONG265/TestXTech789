export const SearchModel = {
  normalize: (text) => (text ?? '').trim(),
  isValid: (text) => SearchModel.normalize(text).length > 0,
};
