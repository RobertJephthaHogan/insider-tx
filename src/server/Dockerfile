FROM python:3.9-alpine
COPY ./app /src/app
COPY ./requirements.txt /src

WORKDIR /src

RUN pip install -r initial_requirements.txt


EXPOSE 8000

CMD ["python", "main.py"]