import cv2 as cv
import os

data_folder = 'dv_1'

folder = []
for i in os.walk(data_folder):
    folder.append(i)
for address, dirs, files in folder:
    for file in files:
        if file.split('.')[-1] != 'jpg' or file.split('.')[-1] != 'jpeg':
            #print(file)
            continue
        img = cv.imread(address + '/' + file)
        if img.shape[0] != 175:
            img = cv.resize(img, (175, 175))
            cv.imwrite(address+'/'+file, img)
            print(address+'/'+file)