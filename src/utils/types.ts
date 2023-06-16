interface IForm {
  [name: string]: string;
}

export type TFormState = {
  formMain: IForm;
  formAdvantages: string[];
  formCheckboxes: string[];
  request: boolean;
  failed: boolean;
  success: boolean;
  error: string;
};
