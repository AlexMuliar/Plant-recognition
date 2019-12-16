from keras.applications.resnet50 import ResNet50
from keras.preprocessing.image import ImageDataGenerator
from keras.models import load_model
from keras.optimizers import Adam
from keras.callbacks import ModelCheckpoint, EarlyStopping, LearningRateScheduler, CSVLogger

import os, sys

dataset_name = 'datasets/dv_1'

num_classes = 19
learning_rate = 0.01

model = load_model(sys.argv[1])

model.summary()

model.compile(loss='categorical_crossentropy',
             optimizer=Adam(0.01),
             metrics=['accuracy'])

train_datagen = ImageDataGenerator(
        rescale=1./255,
        shear_range=0.2,
        zoom_range=0.2,
        horizontal_flip=True)

train_generator = train_datagen.flow_from_directory(
        dataset_name,
        target_size=(175, 175),
        batch_size=32,
        class_mode='categorical'
)
model.fit_generator(
        train_generator,
        steps_per_epoch=2000,
        epochs=5,
)

model.save('model.h5')