import requests
from requests.adapters import HTTPAdapter
from urllib3.util import Retry
import pandas as pd
import json
import bz2

session = requests.Session()
retry = Retry(connect=3, backoff_factor=0.5)
adapter = HTTPAdapter(max_retries=retry)
session.mount('http://', adapter)
session.mount('https://', adapter)

