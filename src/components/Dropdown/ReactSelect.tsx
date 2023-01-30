import { useState } from "react";
import Select from "react-select";

export type SelectOptionType = { label: string; value: string };

interface IReactSelect {
  options: Array<SelectOptionType>;
  onChange: (option: SelectOptionType) => void;
  wrapperStyle?: React.CSSProperties;
  defaultValue?: SelectOptionType;
}
export function ReactSelect({
  defaultValue,
  wrapperStyle = {},
  onChange,
  options,
}: IReactSelect) {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(
    defaultValue ? defaultValue : null
  );
  const handleSelectionChange = (option: SelectOptionType | null) => {
    if (option) {
      setSelectedOption(option);
      if (onChange) {
        onChange(option);
      }
    }
  };

  return (
    <div className="App">
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            ...wrapperStyle,
          }),
        }}
        defaultValue={selectedOption}
        onChange={handleSelectionChange}
        options={options}
      />
    </div>
  );
}
