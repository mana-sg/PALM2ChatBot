from flask import Flask
import google.generativeai as palm
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)


@app.route("/")
def hello():
    return "hello"


if (__name__ == "__main__"):
    app.run(debug=True, port=8080)
