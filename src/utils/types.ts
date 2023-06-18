interface IForm {
  [name: string]: string;
}

interface IError {
  [name: string]: boolean;
}

type TLink = {
  name: string;
  url: string;
};

export type TFormState = {
  formMain: IForm;
  advantages: string[];
  checks: string[];
  request: boolean;
  failed: boolean;
  success: boolean;
  errors: IError;
};

export type TUserState = {
  info: IForm;
  media: ReadonlyArray<TLink>;
};

export interface IRequest {
  nickname: string;
  name: string;
  surname: string;
  sex: "man" | "woman";
  about: string;
  radio: string;
  advantages: string[];
  checkboxes: string[];
}
