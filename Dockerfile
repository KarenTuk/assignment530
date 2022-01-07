# syntax=docker/dockerfile:1

FROM python:3.10

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 80
CMD ["python3", "-m", "gunicorn", "-b", "0.0.0.0:80", "app:app"]
#, "--port", "80", "--host", "0.0.0.0"]

