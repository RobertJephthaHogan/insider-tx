# insider-tx

This repository contains a FastAPI app with a form 4 collector, and websocket. It scrapes the SEC's EDGAR database every 10 seconds to see if there are any new Form 4s (Statement Of Changes In Beneficial Ownership of Securities) for Insiders, Executives, and other control personnel for US Companies. If so, their contents are parsed and can be stored in mongoDB.

## Configuration

within the server directory you will need to create a .env file and add a few variable

MONGO_DETAILS= your mongoDB connection string
FMP_KEY= your financial modeling prep api key
USER_AGENT= the user agent you would like to attach to the request headers for SEC.gov requests