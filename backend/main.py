import backend

if __name__ == '__main__':
	# reload(sys)
	# sys.setdefaultencoding('utf-8')
	app = backend.create_app()
	app.run(host="0.0.0.0")