from flask import Flask, request
from flask_cors import CORS
from markupsafe import escape
import firebase 

app = Flask(__name__)
CORS(app)

FireData = firebase.Firebase()

@app.route("/")
def serve():
  return "index page"



@app.route("/api/firebase/")
def getFromDatabase():
  return FireData.get()

@app.route("/api/firebase/<route>/")
def getFromDatabaseFromRoute(route):
  return FireData.get(escape(route))

@app.route("/api/firebase/", methods = ["POST"])
def postToDatabase():
  data = request.json
  return FireData.post(data)
