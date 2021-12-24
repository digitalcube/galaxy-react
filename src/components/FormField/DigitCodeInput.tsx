import React, {
  FC,
  useState,
  useEffect,
  useRef,
  PropsWithChildren,
  ReactNode,
} from 'react';

/**
 * @see https://codesandbox.io/s/verification-code-input-zjxvo?file=/src/index.js:267-488
 */
export type DigitCodeInputProps = PropsWithChildren<{
  loading: boolean;
  onChange: (values: string[]) => void;
  values: string[];
  errorMessage?: ReactNode;
}>;
export const DigitCodeInput: FC<DigitCodeInputProps> = ({
  loading,
  onChange,
  children,
  values,
  errorMessage,
}) => {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const length = values.length;

  const processInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    slot: number
  ) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...values];
    newCode[slot] = num;
    onChange(newCode);
    if (slot !== length - 1) {
      const target = inputs.current[slot + 1];
      if (target) target.focus();
    }
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, slot: number) => {
    if (e.keyCode === 8 && !values[slot] && slot !== 0) {
      const newCode = [...values];
      newCode[slot - 1] = '';
      onChange(newCode);
      const target = inputs.current[slot - 1];
      if (target) target.focus();
    }
  };

  const pasteInput = (e: React.ClipboardEvent<HTMLInputElement>) => {
    //クリップボードの文字列を取得して配列に入れる
    let numbers = Array.from(e.clipboardData.getData('text'));
    //桁をチェックする
    const valuesLetters = values.length;
    const numbersLetters = numbers.length;
    if (valuesLetters === numbersLetters) {
      //inputを全て取得
      const inputBoxes = document.getElementsByName('num');
      for (let i = 0; i < inputBoxes.length; i++) {
        let inputBox: HTMLInputElement = inputBoxes[i] as HTMLInputElement;
        inputBox.value = String(numbers[i]);
      }
      let newCode = [...values];
      newCode = numbers;
      onChange(newCode);
    } else {
      alert('桁が違います');
    }
  };

  return (
    <div className="form-row mx-0 verification-code">
      {values.map((num, idx) => {
        return (
          <div className="col-2 px-0" key={idx}>
            <input
              className="form-control px-0 text-center"
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!values[0].length && idx === 0}
              readOnly={loading}
              onPaste={(e) => pasteInput(e)}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
              ref={(ref) => inputs.current.push(ref)}
            />
          </div>
        );
      })}
      {errorMessage ? (
        <div className="d-block invalid-feedback">{errorMessage}</div>
      ) : null}
      {children}
    </div>
  );
};

export type UncontrolledDigitCodeInputProps = Omit<
  DigitCodeInputProps,
  'onChange' | 'values'
> & {
  onComplete: (value: string) => void;
  length: number;
};
export const UncontrolledDigitCodeInput: FC<UncontrolledDigitCodeInputProps> = (
  props
) => {
  const { length, onComplete } = props;
  const [values, setValues] = useState([...Array(length)].map(() => ''));
  useEffect(() => {
    if (values.every((num) => num !== '')) {
      onComplete(values.join(''));
    }
  }, [values, onComplete]);
  return <DigitCodeInput {...props} onChange={setValues} values={values} />;
};
