import { useRef, useState } from 'react';
import isFunction from './utils/isFunction';
type AsyncDefaultValues = (payload: unknown) => Promise<any>;
interface UseFormProps {
  values: object;
  defaultValues?: object | AsyncDefaultValues;
  errors?: object;
}
export function useForm(props: UseFormProps) {
  const _formControl = useRef<object | undefined>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _values = useRef<UseFormProps['values']>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formState, updateFormState] = useState({
    isDirty: false,
    isValidating: false,
    isLoading: isFunction(props.defaultValues),
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: props.errors || {},
    disabled: false,
    defaultValues: isFunction(props.defaultValues)
      ? undefined
      : props.defaultValues,
  });

  if (!_formControl.current) {
    _formControl.current = {};
  }
}
