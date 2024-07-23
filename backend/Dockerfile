FROM python:alpine

ENV PYTHONUNBUFFERED 1
EXPOSE 8000
WORKDIR /app/backend
COPY . .
RUN pip3 install -r requirements.txt

CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000" ]