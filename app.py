from flask import Flask, send_file, request
import requests

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    return send_file("templates/summary.html")


@app.route("/installation", methods=["GET"])
def installation():
    return send_file("templates/installation.html")


@app.route("/tutorial", methods=["GET"])
def tutorial():
    return send_file("templates/tutorial.html")


@app.route("/result", methods=["GET"])
def result():
    return send_file("templates/result.html")


@app.route("/conclusion", methods=["GET"])
def conclusion():
    return send_file("templates/conclusion.html")


@app.route("/credits", methods=["GET"])
def credits():
    return send_file("templates/credits.html")


@app.route("/meow", methods=["GET", "POST"])
def meow():
    resp = requests.get("https://api.thecatapi.com/v1/images/search")
    data = resp.json()
    img_url = data[0]["url"]
    top = request.args.get("top", "")
    bot = request.args.get("bot", "")
    mime_url = (
        "https://mime.rcp.r9n.co/memes/default?image="
        + img_url
        + "&top="
        + top
        + "&bottom="
        + bot
    )
    return mime_url


@app.route("/coffee")
def coffee():
    return "thanks :) 🤓"


if __name__ == "__main__":
    app.run()
