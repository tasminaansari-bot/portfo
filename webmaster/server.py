from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/resources')
def resources():
    return render_template('resources.html')

@app.route('/submit')
def submit():
    return render_template('submit.html')

@app.route('/documentation')
def documentation():
    return render_template('documentation.html')

if __name__ == "__main__":
    app.run(debug=True)
