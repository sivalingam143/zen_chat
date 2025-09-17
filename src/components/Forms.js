import React, { useState, useEffect } from "react";
import { Form, Spinner } from "react-bootstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Forms.css";
import moment from "moment";

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

export { TextInputForm, DropDown };
