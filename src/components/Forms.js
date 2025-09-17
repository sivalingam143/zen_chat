import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "./Forms.css";

import { FaArrowCircleRight } from "react-icons/fa";

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
  onSend,
}) => {
  return (
    <>
      <div className="pb-2">{labelname ? <label>{labelname}</label> : ""}</div>
      <div className="form-icon position-relative">
        <Form.Group className="mb-0">
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
            onKeyDown={(e) => {
              if (e.key === "Enter" && onSend) {
                onSend();
              }
              if (onKeyDown) onKeyDown(e);
            }}
            autoFocus={autoFocus}
            disabled={disabled}
            onKeyPress={onKeyPress}
          />
          {suffix_icon ? (
            <span
              className="suffix-icon"
              onClick={onSend}
              style={{ cursor: "pointer" }}
            >
              {suffix_icon}
            </span>
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

export { TextInputForm, DropDown };
