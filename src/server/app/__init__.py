import time
import uvicorn
from fastapi import FastAPI, WebSocket, Depends, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from datetime import datetime
from app.services.collector import Collector
from app.services.edgar_service.form_four_parser import parseFormFour
from app.config import Database as DB
from app.config import Settings

from app.services.edgar_service import EdgarService

app = FastAPI()

router = APIRouter()
    
origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials= True,
    allow_methods=['*'],
    allow_headers=['*'],
)

###################################
### On Start-up Operations and  ###
###################################

@app.on_event("startup")
async def startup_event():
    print("Starting Server...")



###################
### Render Root ###
###################

@router.get("/root")
def main_routes_test():
    return {"message": "Hello Form Collector"}


#######################################
### Insider TX Socket and Collector ###
#######################################

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    print('Accepting client connection...')
    await websocket.accept()
    newFilingsList = []
    while True:
        try:
            # Wait for any message from the client

            recentFilings = EdgarService.getRecentFilings("4", "", "")
            alreadyInDB = 0
            newFilings = 0
            for filing in recentFilings:
                if DB().mdb.form_4.find_one(filing) != None:
                    pass
                else:
                    newFilingsList.append(filing)
                    print(f'{str(filing)}    ADDING TO NEW FILINGS AT   {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}')

            for newFiling in newFilingsList:
                soup, filing = EdgarService.getFiling(newFiling)
                formFourDTO = parseFormFour(soup, filing)
                await websocket.send_json(formFourDTO) # Send message to the client
            
            
                # Change collect mode to True in Settings to activate the collector service
                if Settings().COLLECT_MODE:
                    if DB.mdb.form_4.find_one(filing) != None:
                        alreadyInDB = alreadyInDB + 1
                    else:
                        newFilings = newFilings + 1
                        try:
                            DB.mdb.form_4.insert_one(formFourDTO)
                            print("FORM 4 SUCCESSFULLY ENTERED INTO DATABASE")
                        except Exception:
                            DB.mdb.form_4.replace_one({ "_id": formFourDTO["_id"] }, formFourDTO, True)
                            print("FORM 4  SUCCESSFULLY REPLACED IN DATABASE")

            time.sleep(10)

        except Exception as e:
            print('error:', e)
            break
    print('Bye..')





######################################
### HTML and Route for Socket Data ###
######################################


html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>Filtered Form 4 Open Market Purchases and Sales WebSocket</h1>
            
            <ul id='messages'>
            </ul>
        <script>
         var ws = new WebSocket("ws://localhost:8000/ws");
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""


@app.get("/")
async def get():
    return HTMLResponse(html)