import React from 'react';
import Input from 'react-validation/build/input';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.module.css';

export function Textbox(props) {
  const labelClass = props.Inline ? 'col-sm-2 col-form-label' : 'form-label';
  const inputClass =
    'form-control, form-control-sm' + (props.Inline ? 'col-sm-10' : '');
  const groupClass = 'form-group' + (props.Inline ? +'row' : '');

  return (
    <div className={groupClass}>
      <label
        htmlFor={props.name}
        className={labelClass}
        style={{ whiteSpace: 'nowrap', textAlign: 'left' }}
      >
        {props.label}
      </label>

      <Input
        className="form-control"
        name={props.name}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export function Textarea(props) {
  const labelClass = props.Inline ? 'col-sm-2 col-form-label' : 'form-label';
  const inputClass =
    'form-control, form-control-sm' + (props.Inline ? 'col-sm-10' : '');
  const groupClass = 'form-group' + (props.Inline ? +'row' : '');

  return (
    <div className={groupClass}>
      <label
        htmlFor={props.name}
        className={labelClass}
        style={{ whiteSpace: 'nowrap', textAlign: 'left' }}
      >
        {props.label}
      </label>

      <div className={inputClass}>
        <textarea
          className="form-control"
          name={props.name}
          type="text"
          value={props.value}
          placeholder={props.placeholder}
          validations={props.validations}
        />
      </div>
    </div>
  );
}

export function CheckBox(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        id={props.name}
        name={props.name}
        type="checkbox"
        onChange={props.handleChange}
      />
      <label for={props.name} className="form-label">
        {props.title}
      </label>
    </div>
  );
}

export function DropDown(props) {
  return (
    <div className="form-group">
      <label for={props.name}> {props.title} </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map((option) => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
