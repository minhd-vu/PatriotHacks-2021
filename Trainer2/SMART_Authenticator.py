import cv2
import numpy as np
import pickle
import os


def write():
    password = "l3gend4ry1"
    file = open('passfile.txt', 'w')
    file.write("Password =" + password)

    file.close()


def primary():
    print("Authenticator Opened")

    face_cascade = cv2.CascadeClassifier(
        r"C:\Users\Jorge Flores\PycharmProjects\SMART_Authenticator\haarcascade_frontalface_default.xml")
    cv2.startWindowThread()
    recognizer = cv2.face.LBPHFaceRecognizer_create()
    recognizer.read("trainer.yml")

    # labels = {"person_name": 1}
    # with open("labels.pickle", 'rb') as f:
    #     og_labels = pickle.load(f)
    #     labels = {v: k for k, v in og_labels.items()}

    # initializing our video feed
    cap = cv2.VideoCapture(0)
    ret = True
    # loop until feed is broken
    while ret:
        # captures frame by frame
        ret, frame = cap.read()

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)

        # provides a region of interest i.e. the face and draws a rectangle around it
        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
            roi_color = frame[y:y + h, x:x + w]
            roi_gray = gray[y:y + h, x:x + w]

            id_, conf = recognizer.predict(roi_gray)
            if conf >= 45 and conf <= 85:
                print(id_)
                write()
                # print(labels[id_])

        # shows the feed
        cv2.imshow('', frame)

        # breaks loop when q is pressed and closes all the windows
        if cv2.waitKey(1) & 0xFF == ord('q'):
            cap.release()
            cv2.destroyAllWindows()
            break


def close():
    cv2.destroyAllWindows()
    print("no")


def rip():
    filelist = [f for f in
                os.listdir("C://Users//Jorge Flores//PycharmProjects//SMART_Authenticator//pictures") if
                f.endswith(".png")]
    for f in filelist:
        os.remove(
            os.path.join(("C://Users//Jorge Flores//PycharmProjects//SMART_Authenticator//pictures"), f))


def rip_trainer():
    filelist = [f for f in os.listdir("C://Users//Jorge Flores//PycharmProjects//SMART_Authenticator//") if
                f.endswith(".yml")]
    for f in filelist:
        os.remove(os.path.join(("C://Users//Jorge Flores//PycharmProjects//SMART_Authenticator//"), f))
