from flask import Flask
from flask_cors import CORS
from markupsafe import escape
app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
  return "Index Page"

@app.route("/<name>")
def hello(name):
  print(f"Client wrote: {escape(name)}")
  return f"Hello, {escape(name)}!"