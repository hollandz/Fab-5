"use strict";

module.exports = {
  port: process.env.PORT || 3000,
  sendgrid: {
    user: process.env.SENDGRID_USER || 'azure_26671fad870f47d3458dc77dede74dd5@azure.com',
    pass: process.env.SENDGRID_PASSWORD || '8Ia5zRY04Ow9re9',
    to: process.env.EMAIL_RECIPIENT || 'zaphane.holland@gmail.com'
  }
};
