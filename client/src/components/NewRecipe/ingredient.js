import React from 'react';
import propTypes from 'prop-types';
import Styles from './styles.module.css';

const CookingUnits = [
  'tsp',
  'tbsp',
  'fl oz',
  'cup',
  'pint',
  'quart',
  'oz',
  'Pound',
  'each',
];

export const IngredientInputs = ({ IDX, State, Handler }) => {
  const qtyID = `qty-${IDX}`;
  const UnitsId = `unit-${IDX}`;
  const IngID = `ing-${IDX}`;

  return (
    <div key={`ingRow-${IDX}`}>
      <div className={'form-row ' + Styles.ingredientRow}>
        {/* Quantity Input  */}
        <div className="col-sm-2">
          <div className="form-group">
            <label className="sr-only" htmlFor={qtyID}>
              Quantity
            </label>
            <input
              type="text"
              name={qtyID}
              data-idx={IDX}
              id={qtyID}
              className="form-control form-control-sm"
              data-name="qty"
              value={State[IDX].qty}
              onChange={Handler}
              placeholder="Qty"
            />
          </div>
        </div>

        {/*  Units of measure  */}
        <div className="col-sm-2">
          <div className="form-group">
            <label className="sr-only" htmlFor={UnitsId}>
              Unit of Measure
            </label>
            <select
              id={UnitsId}
              data-idx={IDX}
              className="custom-select custom-select-sm"
              data-name="unit"
              value={State[IDX].unit}
              onChange={Handler}
            >
              {CookingUnits.map((item, index) => (
                <option key={index} value={item}>
                  {' '}
                  {item}{' '}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Ingredient Input  */}
        <div className="col-sm-8">
          <div className="form-group">
            <label className="sr-only" htmlFor={IngID}>
              Ingredient
            </label>
            <input
              type="text"
              name={IngID}
              data-idx={IDX}
              id={IngID}
              className="form-control form-control-sm"
              data-name="ingredient"
              value={State[IDX].ingredient}
              onChange={Handler}
              placeholder="Ingredient"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

IngredientInputs.propTypes = {
  IDX: propTypes.number,
  State: propTypes.array,
  IngHandler: propTypes.func,
};

export default IngredientInputs;
