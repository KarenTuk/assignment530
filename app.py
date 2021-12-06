from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/',methods=["GET"])
def index():
    return render_template("summary.html")

@app.route('/installation',methods=["GET"])
def installation():
    return render_template("installation.html")

@app.route('/tutorial',methods=["GET"])
def tutorial():
    return render_template("tutorial.html")

@app.route('/result',methods=["GET"])
def result():
    return render_template("result.html")

@app.route('/conclusion',methods=["GET"])
def conclusion():
    return render_template("conclusion.html")

@app.route('/credits',methods=["GET"])
def credits():
    return render_template("credits.html")


@app.route('/meow',methods=["GET", "POST"])
def meow():
    resp = requests.get("https://api.thecatapi.com/v1/images/search")
    data=resp.json()
    img_url=data[0]["url"]
    top = request.args.get('top','')
    bot = request.args.get('bot','')
    mime_url = "https://mime.rcp.r9n.co/memes/default?image=" + img_url + "&top=" + top + "&bottom=" + bot
    print(request.query_string)
    print(mime_url)
    return mime_url

@app.route("/coffee")
def coffee():
  return "thanks :)"

if __name__ == "__main__":
    app.run()