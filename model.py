from keras.applications.resnet50 import ResNet50
from keras.models import Model
from keras.layers import Input, AveragePooling2D, Flatten, Dense


num_classes = 19

resnet = ResNet50(include_top=False, weights=None, input_tensor=None, )

input_tensor = Input(shape=(175, 175, 3))
x = resnet(input_tensor)
x = AveragePooling2D(pool_size=4)(x)
x = Flatten()(x)
x = Dense(256, activation='relu')(x)
outputs = Dense(num_classes,
                activation='softmax',
                kernel_initializer='he_normal')(x)
model = Model(input_tensor, outputs)

model.save('model.h5')