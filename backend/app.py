from flask import Flask, request
from flask_cors import CORS
from markupsafe import escape
import firebase 

app = Flask(__name__)
CORS(app)

FireData = firebase.Firebase()

@app.route("/")
def index():
  return "Index Page"

@app.route("/<name>")
def hello(name):
  print(f"Client wrote: {escape(name)}")
  return f"Hello, {escape(name)}!"
@app.route("/firebase-get")
def getFromDatabase():
  return FireData.getAll()

@app.route("/firebase-get/<route>")
def getFromDatabaseFromRoute(route):
  return FireData.getAll(escape(route))