import backend
from flask import Flask
from flask_cors import CORS


if __name__ == '__main__':
	# reload(sys)
	# sys.setdefaultencoding('utf-8')
	app = backend.create_app()
	CORS(app)
	app.run(host="0.0.0.0",port=8000)
