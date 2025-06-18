const getOtpEmailTemplate = (otp) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>OTP Verification</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: #ffffff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #2c5aa0;
          margin-bottom: 10px;
        }
        .title {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        .otp-container {
          text-align: center;
          margin: 30px 0;
          padding: 30px;
          background-color: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #2c5aa0;
        }
        .otp-code {
          font-size: 36px;
          font-weight: bold;
          color: #2c5aa0;
          letter-spacing: 8px;
          margin: 15px 0;
          padding: 15px;
          background-color: #ffffff;
          border: 2px dashed #2c5aa0;
          border-radius: 8px;
          display: inline-block;
        }
        .message {
          font-size: 16px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 20px;
        }
        .warning {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 5px;
          padding: 15px;
          margin: 20px 0;
          color: #856404;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          font-size: 14px;
          color: #888;
        }
        .button {
          display: inline-block;
          padding: 12px 30px;
          background-color: #2c5aa0;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          margin: 20px 0;
        }
        @media only screen and (max-width: 600px) {
          .container {
            padding: 20px;
          }
          .otp-code {
            font-size: 28px;
            letter-spacing: 4px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🏥 Duty Doctor</div>
          <h1 class="title">Login Verification</h1>
        </div>
        
        <div class="message">
          <p>Hello,</p>
          <p>You have requested to log in to your Duty Doctor account. Please use the following One-Time Password (OTP) to complete your login:</p>
        </div>
        
        <div class="otp-container">
          <p style="margin: 0; font-size: 18px; color: #666;">Your OTP Code:</p>
          <div class="otp-code">${otp}</div>
          <p style="margin: 10px 0 0 0; font-size: 14px; color: #888;">This code is valid for 5 minutes</p>
        </div>
        
        <div class="message">
          <p>Enter this code in the login page to access your account. If you didn't request this login, please ignore this email.</p>
        </div>
        
        <div class="warning">
          <strong>⚠️ Security Notice:</strong><br>
          • Never share this OTP with anyone<br>
          • Our team will never ask for your OTP<br>
          • This code expires in 5 minutes
        </div>
        
        <div class="footer">
          <p>Thank you for using Duty Doctor!</p>
          <p>If you have any questions, please contact our support team.</p>
          <p style="font-size: 12px; margin-top: 20px;">
            This is an automated message, please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = getOtpEmailTemplate