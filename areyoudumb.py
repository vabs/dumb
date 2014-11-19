from flask import Flask
from flask.templating import render_template

app = Flask(__name__)


@app.route('/')
def hello_dumb():
    return render_template('dumb.html')


@app.route('/<dumb_id>')
def send_dumb(dumb_id):
    print('here')
    return render_template('youdumb.html')


if __name__ == '__main__':
    app.run()
