import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

export type SelectDataType = {
  id: string;
  value: string;
};

interface Props extends SelectProps {
  valid?: boolean;
  options: SelectDataType[];
  isRequired?: boolean;
}

const CSelect = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const {
    options,
    placeholder,
    className,
    valid = true,
    isRequired,
    label,
    value,
    ...restProps
  } = props;

  return (
    <FormControl error={!valid} fullWidth>
      <InputLabel id="select-label">
        <span>
          {label} {isRequired && <span className="text-required">*</span>}
        </span>
      </InputLabel>
      <Select
        {...Object.assign({}, restProps, { valid: undefined })}
        labelId="select-label"
        label={label}
        className={`cinput ${className} cinput-${valid ? "valid" : "invalid"}`}
        ref={ref}
        value={value ? value : "defaultValue"}
        fullWidth
      >
        {placeholder && (
          <MenuItem sx={{ fontStyle: "italic" }} value="defaultValue" disabled>
            {placeholder}
          </MenuItem>
        )}
        {options.map((opt) => (
          <MenuItem key={opt.id} value={opt.id}>
            {opt.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export default CSelect;
