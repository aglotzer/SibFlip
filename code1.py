from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/flip_coin', methods=['POST'])
def flip_coin():
    heads_img = 'path/to/heads/image.jpg'
    tails_img = 'path/to/tails/image.jpg'
    
    # simulate coin flip
    result = random.choice(['heads', 'tails'])
    
    # get uploaded image, if applicable
    uploaded_file = request.files['image']
    if uploaded_file.filename != '':
        uploaded_file.save('path/to/uploaded/image.jpg')
        image_url = 'path/to/uploaded/image.jpg'
    else:
        image_url = None
    
    return render_template('result.html', result=result, image_url=image_url, heads_img=heads_img, tails_img=tails_img)


