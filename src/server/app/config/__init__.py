from typing import Optional
import os
from dotenv import load_dotenv
from pydantic import BaseSettings
import pymongo




# Load the environment variables
load_dotenv()

class Settings(BaseSettings):

    # database url
    DATABASE_URL: Optional[str] = os.getenv("MONGO_DETAILS")

    # User Agent for SEC.gov requests
    USER_AGENT: Optional[str] = os.getenv("USER_AGENT")

    # FMP API key:
    FMP_KEY: Optional[str] = os.getenv("FMP_KEY")

    # Should collect filing data:
    COLLECT_MODE = False

    # Config Class
    class Config:
        env_file = ".env"
        #orm_mode = True



class Database():

    client = pymongo.MongoClient(Settings().DATABASE_URL)
    mdb = client.form_4_collector