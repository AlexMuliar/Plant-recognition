from keras.models import load_model
from keras.preprocessing.image import ImageDataGenerator

import sys 

valid_dataset_name = 'datasets/dv_1'

model = load_model(sys.argv[1])

eval_datagen = ImageDataGenerator(
        rescale=1./255,
        shear_range=0.2,
        zoom_range=0.2,
        horizontal_flip=True
)
eval_generator = eval_datagen.flow_from_directory(
        valid_dataset_name,
        target_size=(175, 175),
        batch_size=4,
        class_mode='categorical'
)
acc = model.evaluate_generator(eval_generator, steps=200)

print(f'Accuracy: { acc[1] * 100 }%')
