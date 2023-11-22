from flask import Flask
import google.generativeai as palm
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)


def setupconfig():
    palm.configure(api_key=os.getenv("API_KEY"))


@app.route("/")
def hello():
    return "hello"


@app.route("/message/<text>")
def renderMessages(text):
    setupconfig()
    response = palm.chat(messages=f"{text}")
    return f"{response}"


if (__name__ == "__main__"):
    app.run(debug=True, port=os.getenv("PORT"))
