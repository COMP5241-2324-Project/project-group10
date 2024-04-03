from flask import Flask
from flask import render_template

app = Flask(__name__)


# @app.route('/')
# def hello_world():  # put application's code here
#     return 'Hello World!'

@app.route('/')
def o():
    return  render_template("overview.html")
@app.route('/grouppage.html')
def g():
    return  render_template("grouppage.html")
@app.route('/userpage.html')
def u():
    return  render_template("userpage.html")
@app.route('/search.html')
def s():
    return  render_template("search.html")

if __name__ == '__main__':
    app.run()
