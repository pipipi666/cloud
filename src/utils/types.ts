interface IForm {
  [name: string]: string;
}

type TLink = {
  name: string;
  url: string;
};

export type TFormState = {
  formMain: IForm;
  formAdvantages: string[];
  formCheckboxes: string[];
  request: boolean;
  failed: boolean;
  success: boolean;
  error: string;
};

export type TUserState = {
  info: IForm;
  media: ReadonlyArray<TLink>;
};
