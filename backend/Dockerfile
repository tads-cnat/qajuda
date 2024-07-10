FROM python:alpine
EXPOSE 8000
WORKDIR /app/backend
COPY . .
RUN pip3 install -r requirements.txt

CMD ["sh", "-c", "python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:8000"]


