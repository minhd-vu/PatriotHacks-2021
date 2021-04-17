import cv2
import os
import numpy as np
from PIL import Image
import pickle


def image_learning():
    print("training set")
    BASE_dir = os.path.dirname(os.path.abspath(__file__))
    image_dir = os.path.join(BASE_dir, r"/home/ang3lo/Downloads/SMART_Authenticator-master/pics")

    face_cascade = cv2.CascadeClassifier(
        r"haarcascade_frontalface_default.xml")

    recognizer = cv2.face.LBPHFaceRecognizer_create()

    current_id = 0
    label_ids = {}
    # number values of the labels
    y_label = []
    # number values of the images
    x_train = []

    for root, dirs, files in os.walk(image_dir):
        for file in files:
            if file.endswith("png") or file.endswith("jpg"):
                path = os.path.join(root, file)
                label = os.path.basename(os.path.dirname(path).replace("", "-").lower())
                # print(label, path)
                if not label in label_ids:
                    label_ids[label] = current_id
                    current_id = current_id + 1
                id_ = label_ids[label]
                # print(label_ids)
                # y_label.append(label)
                # x_train.append(path)
                # turns image gray
                pil_image = Image.open(path).convert("L")
                # converts image to numerical value
                image_array = np.array(pil_image, "uint8")
                # print(image_array)
                face = face_cascade.detectMultiScale(image_array)

                for (x, y, w, h) in face:
                    roi = image_array[y:y + h, x:x + h]
                    x_train.append(roi)
                    y_label.append(id_)

    # print(y_label)
    # print(x_train)

    with open("labels.pickle", 'wb') as f:
        pickle.dump(label_ids, f)

    recognizer.train(x_train, np.array(y_label))
    recognizer.save("trainer.yml")
