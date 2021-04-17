import cv2


def user_maker(x):
    cap = cv2.VideoCapture(0)
    ret = True

    while ret:
        ret, frame = cap.read()

        cv2.imshow("user maker", frame)

        if cv2.waitKey(1) & 0xFF == ord('c'):
            img = r"/home/ang3lo/Downloads/SMART_Authenticator-master/pics/" + x
            cv2.imwrite(img, frame)
            cap.release()
            cv2.destroyAllWindows()
            break
