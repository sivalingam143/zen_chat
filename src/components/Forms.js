import React, { useState, useEffect } from "react";
import { Form, Spinner } from "react-bootstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Forms.css";
import moment from "moment";

const InstantModel = ({
  optionlist = [],
  className,
  name,
  labelname,
  placeholder,
  value,
  onChange,
  modeltitle = "create",
}) => {
  const handleChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    if (selectedValue !== value) {
      onChange({
        ...value,
        [name]: selectedValue,
      });
    }
  };

  // Find the selected option based on the current value
  const selectedOption = optionlist.find((option) => option.value === value);

  return (
    <>
      <div className="pb-2">{labelname ? <label>{labelname}</label> : ""}</div>

      <div className="w-100 d-flex">
        <Select
          placeholder={placeholder}
          options={optionlist}
          labelField="label"
          valueField="value"
          value={selectedOption} // Set the selected option
          onChange={handleChange}
          multi
          className="w-100"
        />
      </div>
    </>
  );
};

const TextInputForm = ({
  name,
  type,
  suffix_icon,
  prefix_icon,
  labelname,
  value,
  onChange,
  placeholder,
  onKeyDown,
  autoFocus,
  disabled,
  onKeyPress,
}) => {
  return (
    <>
      <div className="pb-2">{labelname ? <label>{labelname}</label> : ""}</div>
      <div className="form-icon">
        <Form.Group className="">
          {prefix_icon ? (
            <span className="prefix-icon">{prefix_icon}</span>
          ) : (
            ""
          )}
          <input
            type={type}
            name={name}
            className={`form-cntrl w-100 
                      ${
                        prefix_icon && suffix_icon
                          ? "form-control-padboth"
                          : prefix_icon
                          ? "form-control-padleft"
                          : suffix_icon
                          ? "form-control-padright"
                          : ""
                      }`}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus={autoFocus}
            disabled={disabled}
            onKeyPress={onKeyPress}
          />
          {suffix_icon ? (
            <span className="suffix-icon">{suffix_icon}</span>
          ) : (
            ""
          )}
        </Form.Group>
      </div>
    </>
  );
};
const DropDown = ({
  optionlist,
  labelname,
  placeholder,
  modeltitle = "Create",
}) => {
  return (
    <>
      <div className="pb-2">{labelname ? <label>{labelname}</label> : ""}</div>
      <div className="w-100 d-flex">
        <Select
          options={optionlist}
          placeholder={placeholder}
          labelField="label"
          valueField="value"
          isMulti
          className="w-100 "
        ></Select>
      </div>
    </>
  );
};

const DropDownUI = ({
  optionlist = [],
  className,
  name,
  labelname,
  placeholder,
  value,
  onChange,
  onKeyDown,
  autoFocus,
  disabled,
}) => {
  const handleChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    if (selectedValue !== value) {
      onChange({
        ...value,
        [name]: selectedValue,
      });
    }
  };

  // Find the selected option based on the current value
  const selectedOption = optionlist.find((option) => option.value === value);
  return (
    <>
      <div className="pb-2">{labelname ? <label>{labelname}</label> : ""}</div>

      <div className="w-100 d-flex">
        <Select
          placeholder={placeholder}
          options={optionlist}
          labelField="label"
          valueField="value"
          value={selectedOption} // Set the selected option
          onChange={handleChange}
          multi
          className="w-100"
          onKeyDown={onKeyDown}
          autoFocus={autoFocus}
          disabled={disabled}
        />
      </div>
    </>
  );
};

const Calender = ({ setLabel, selectedDate, calenderlabel }) => {
  const [startDate, setStartDate] = useState(
    selectedDate instanceof Date && !isNaN(selectedDate)
      ? selectedDate
      : new Date()
  );

  // Sync state when `selectedDate` changes from parent
  useEffect(() => {
    if (selectedDate instanceof Date && !isNaN(selectedDate)) {
      setStartDate(selectedDate);
    }
  }, [selectedDate]);
  return (
    <>
      <div className="pb-2 px-3">
        <label>{calenderlabel}</label>
      </div>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          setLabel(date, "date_of_birth");
        }}
        dateFormat="dd-MM-yyyy"
        className="w-100 form-cntrl"
        selectsStart
        startDate={startDate}
      />
    </>
  );
};

const LoadingSpinner = ({ message = "Loading...", height = "150px" }) => (
  <div
    className="d-flex justify-content-center align-items-center w-100 loading-container"
    style={{ minHeight: height }}
  >
    <div className="text-center loading-box">
      <Spinner animation="border" className="loading-spinner text-danger" />
      <div className="mt-2 text-danger  loading-text">{message}</div>
    </div>
  </div>
);

const DropDownUItest = ({
  optionlist = [],
  className,
  name,
  labelname,
  placeholder,
  value,
  onChange,
  onKeyDown,
  autoFocus,
  disabled,
}) => {
  const customFilterOption = (option, rawInput) => {
    const input = rawInput.toLowerCase().trim();

    const productName = option.label ? option.label.toLowerCase() : "";

    const productCode =
      option.data && option.data.product_code
        ? option.data.product_code.toLowerCase()
        : "";

    return productName.includes(input) || productCode.includes(input);
  };

  const selectedOption =
    optionlist.find((option) => option.value === value) || null;

  const handleChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : null;
    if (selectedValue !== value) {
      onChange({
        [name]: selectedValue,
      });
    }
  };

  return (
    <div>
      {labelname && <label className="pb-2">{labelname}</label>}
      <div className="w-100 d-flex">
        <Select
          placeholder={placeholder}
          options={optionlist}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
          value={selectedOption}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          autoFocus={autoFocus}
          isDisabled={disabled}
          isClearable
          filterOption={customFilterOption}
          className={className || "w-100"}
        />
      </div>
    </div>
  );
};

const formatDate = (dateString, format = "DD-MM-YYYY") => {
  if (!dateString) return "N/A"; // Handle empty or invalid dates
  const date = moment(dateString, ["YYYY-MM-DD", "DD/MM/YYYY"], true); // Parse multiple possible formats
  return date.isValid() ? date.format(format) : "Invalid Date";
};

export {
  TextInputForm,
  DropDown,
  DropDownUI,
  Calender,
  InstantModel,
  LoadingSpinner,
  formatDate,
  DropDownUItest,
};
