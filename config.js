"use strict";

module.exports = {
  port: process.env.PORT || 3000,
  sendgrid: {
    user: process.env.SENDGRID_USER || '',
    pass: process.env.SENDGRID_PASSWORD || '',
    to: process.env.EMAIL_RECIPIENT || 'zaphane.holland@gmail.com'
  }
};
