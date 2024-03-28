from flask import Flask
from flask import render_template

app = Flask(__name__)


# @app.route('/')
# def hello_world():  # put application's code here
#     return 'Hello World!'

@app.route('/')
def o():
    return  render_template("overview.html")
@app.route('/g')
def g():
    return  render_template("grouppage.html")
@app.route('/u')
def u():
    return  render_template("userpage.html")
if __name__ == '__main__':
    app.run()
