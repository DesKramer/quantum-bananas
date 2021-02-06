from PIL import Image
import os
import argparse

def rescale(dir_path):
    size = (800,600) 
    for fileN in os.listdir(dir_path):
        fullpath = os.path.join(dir_path, fileN)
        try:
            print("Resizing file: " + fileN)
            image = Image.open(fullpath)
            resized_image = image.resize(size, Image.ANTIALIAS)
            rotate = resized_image.transpose(Image.ROTATE_270)
            rotate.save(fullpath)
        except IOError:
            print ("ERROR: " + fileN + "- wrong file type...")

if __name__ == '__main__':
    '''
    parser = argparse.ArgumentParser(description="Resize images")
    parser.add_argument('-f', '--folder', type=str, required=True, help='Specify directory')
    args = parser.parse_args()
    '''
    path = os.path.join(os.getcwd(), ('image_resize'))
    print (path)
    rescale(path)