import numpy as np
import os
import six.moves.urllib as urllib
import sys
import tarfile
import zipfile
import pathlib
from collections import defaultdict
from io import StringIO
from matplotlib import pyplot as plt
from PIL import Image
from IPython.display import display

import tensorflow as tf




# Webcam - Object Detection
import cv2
video_capture = cv2.VideoCapture(0)

while(True):
    re,frame = video_capture.read()
    # Image_np=show_inference(detection_model,frame)
    cv2.imshow('object detection', cv2.resize(frame, (800,600)))
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

video_capture.release()
cv2.destroyAllWindows()