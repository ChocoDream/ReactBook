from dotenv import load_dotenv
import os
import firebase_admin
from firebase_admin import credentials, db

load_dotenv()

class SingletonMeta(type): #SINGLETON Class Meta
  _instances = {}

  def __call(cls, *args, **kwargs):
    if cls not in cls._instances:
      instance = super().__call__(*args, **kwargs)
      cls._instances[cls] = instance
    return cls._instances[cls]

class Firebase(metaclass = SingletonMeta):
  def __init__(self):
    ADMIN_SDK_KEY={
      "type": os.environ.get("TYPE"),
      "project_id": os.environ.get("PROJECT_ID"),
      "private_key_id": os.environ.get("PRIVATE_KEY_ID"),
      "private_key": os.environ.get("PRIVATE_KEY"),
      "client_email": os.environ.get("CLIENT_EMAIL"),
      "client_id": os.environ.get("CLIENT_ID"),
      "auth_uri": os.environ.get("AUTH_URI"),
      "token_uri": os.environ.get("TOKEN_URI"),
      "auth_provider_x509_cert_url": os.environ.get("AUTH_PROVIDER_X509_CERT_URL"),
      "client_x509_cert_url": os.environ.get("CLIENT_X509_CERT_URL")
    }
    cred = credentials.Certificate(ADMIN_SDK_KEY)
    firebase_admin.initialize_app(cred, {'databaseURL': os.environ.get("DATABASEURL")})

  @classmethod
  def get(self, route = "/"):
    ref = db.reference(route)
    return ref.get()
    #ref = db.reference(route)
    #print(ref.get())
  
  @classmethod
  def post(self, data, route = "/"):
    ref = db.reference(route)
    ref.push().set(data)
    return "Submitted"
