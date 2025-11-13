type ValidField = {
  isValid: true;
};

type InvalidField = {
  isValid: false;
  errorMsg: string;
};

type ValidationField = ValidField | InvalidField;

export type ValidationData<T> = {
  [K in keyof T]: ValidationField;
};
