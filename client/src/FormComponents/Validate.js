import React from 'react';
import { isEmail } from 'validator';

module.exports = {
  vRequired: function (value) {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  },

  vConfirmMatch: (valueA, valueB) => {
    if (valueA !== valueB) {
      return (
        <div className="alert alert-danger" role="alert">
          Passwords must match.
        </div>
      );
    }
  },

  validEmail: (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  },

  vpassword: (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  },
};
