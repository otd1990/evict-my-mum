interface IinputProps {
  inputType: string;
  inputId: string;
  labelName: string;
  showLabel?: boolean;
  placeholder?: string;
  value?: string | null;
  inputFunction?: () => void;
}

const Input: React.FC<IinputProps> = ({
  inputType,
  inputId,
  labelName,
  showLabel,
  placeholder,
  inputFunction,
}) => {
  return (
    <>
      {showLabel && (
        <label className="form-input__label" htmlFor={labelName}>
          {labelName}
        </label>
      )}
      <input
        type={inputType}
        id={inputId}
        className="form-input__input"
        name={labelName}
        placeholder={placeholder}
        onInput={inputFunction}
      />
    </>
  );
};

export default Input;
