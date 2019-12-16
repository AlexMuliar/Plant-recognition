#from keras.models import load_model
from PIL import Image

from tornado import httpserver, ioloop
from tornado.web import RequestHandler

import tornado.web
import tornado.httpserver

import sys
import os
import numpy as np
import io 

#model = load_model('models/model.h5')

def byte_image_to_raw(byte_data):
    image = Image.open(io.BytesIO(byte_data))
    image = image.resize((175, 175))
    return np.reshape(np.array(image), (1, 175, 175, 3)) / 255


class MainHandler(RequestHandler):
    def get(self):
        self.render('pages/index.html')

    def post(self):
        # print(self.request.body_arguments)
        # print(self.request.files.keys())
        # byte_image = self.request.files['photo'][0]['body']
        # data = byte_image_to_raw(byte_image)
        # result = [i for i in range(17)]
        #result = list(model.predict(data)[0])
        # r2 = result[:]
        # send_data = []
        # for i in range(5):
        #     send_data.append(result.index(max(r2)))
        #     r2.pop(r2.index(max(r2)))
        #result = np.array([1, 0])
        #result = np.where(result == result.max())[0]
        self.write(str([13,14,15,16,17]))

class Application(tornado.web.Application):
    """Create tornado web-app"""
    def __init__(self):
        handlers = [
            (r'/recognize', MainHandler),
        ]

        settings = {
            'template_path': 'templates',
            'static_path': 'static',
            'debug': True
        }
        tornado.web.Application.__init__(self, handlers, **settings)

if __name__ == "__main__":
    # os.system('cls')
    http_server = httpserver.HTTPServer(Application())
    try:
        port = int(sys.argv[1])
    except Exception:
        port = 8000

    http_server.listen(port, address='0.0.0.0')
    print(f'server listen on: localhost:{ port }')
    ioloop.IOLoop.instance().start()
