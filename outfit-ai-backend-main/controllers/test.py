import pickle
import numpy as np
import tensorflow
from numpy.linalg import norm
from tensorflow.keras.preprocessing import image
from tensorflow.keras.layers import GlobalMaxPooling2D
from tensorflow.keras.applications.resnet50 import ResNet50,preprocess_input
from sklearn.neighbors import NearestNeighbors
import cv2


# feature_list = np.array(pickle.load(open('outfit-ai-backend/uploads/embeddings.pkl','rb')))
# filenames = pickle.load(open('outfit-ai-backend/uploads/filenames.pkl','rb'))
feature_list = np.array(pickle.load(open('uploads/embeddings.pkl','rb')))
filenames = pickle.load(open('uploads/filenames.pkl','rb'))

model = ResNet50(weights='imagenet',include_top=False,input_shape=(224,224,3))
model.trainable = False

model = tensorflow.keras.Sequential([
    model,
    GlobalMaxPooling2D()
])

# img = image.load_img('outfit-ai-backend/uploads/shirt.jpg',target_size=(224,224))
img = image.load_img('uploads/shirt.jpg',target_size=(224,224))
img_array = image.img_to_array(img)
expanded_img_array = np.expand_dims(img_array, axis=0)
preprocessed_img = preprocess_input(expanded_img_array)
result = model.predict(preprocessed_img).flatten()
normalized_result = result / norm(result)


neighbors = NearestNeighbors(n_neighbors=6,algorithm='brute',metric='euclidean')
neighbors.fit(feature_list)

distances,indices = neighbors.kneighbors([normalized_result])

print(indices)

for file in indices[0][1:6]:
    temp_img = cv2.imread(filenames[file])
    if temp_img is not None and temp_img.shape[0] > 0 and temp_img.shape[1] > 0:
        cv2.imshow('output', temp_img)
        cv2.waitKey(0)