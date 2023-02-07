from datetime import datetime
from app.config import Database as DB
from app.services.edgar_service.form_four_parser import parseFormFour
from app.services.edgar_service import EdgarService



# This is the Base Collector Service, 
# though it's collection functionality was integrated 
# within the tx websocket to improve efficiency for this portfolio project

class Collector:

    # Collect Form 4 and Insert to Mongo
    async def collectFormFours():

        finalDTO = {}
        newFilingsList = []
        alreadyInDB = 0
        newFilings = 0
        recentFilings = EdgarService.getRecentFilings("4", "", "")

        for filing in recentFilings:
            if DB.mdb.form_4.find_one(filing) != None:
                pass
            else:
                newFilingsList.append(filing)

        #print("NEW FILINGS LIST =" + str(newFilingsList))

        for newFiling in newFilingsList:
            soup, filing = EdgarService.getFiling(newFiling)
            formFourDTO = parseFormFour(soup, filing)

            if DB.mdb.form_4.find_one(filing) != None:
                alreadyInDB = alreadyInDB + 1
            else:
                newFilings = newFilings + 1
                try:
                    DB.mdb.form_4.insert_one(formFourDTO)
                except Exception:
                    DB.mdb.form_4.replace_one({ "_id": formFourDTO["_id"] }, formFourDTO, True)
            finalDTO[newFiling] = formFourDTO
        if newFilings == 0:
            pass

        return finalDTO