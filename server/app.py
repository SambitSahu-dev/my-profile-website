from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib, os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    name = data['name']
    email = data['email']
    subject = data.get('subject', 'Portfolio Contact')
    message = data['message']

    full_message = f"From: {name}\nEmail: {email}\n\nMessage:\n{message}"

    # Create a multipart message
    msg = MIMEMultipart()
    msg['Subject'] = subject
    msg['From'] = os.getenv("EMAIL_USER")
    msg['To'] = os.getenv("TO_EMAIL")
    msg['Cc'] = email  # ✅ Add entered user email as CC

    msg.attach(MIMEText(full_message, 'plain'))

    to_addresses = [os.getenv("TO_EMAIL")] + [email]  # include CC

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
        server.sendmail(msg['From'], to_addresses, msg.as_string())
        server.quit()
        return jsonify({"success": True}), 200
    except Exception as e:
        print("❌ Error sending email:", e)
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
