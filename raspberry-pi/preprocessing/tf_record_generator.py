import os
import io
import pandas as pd
import tensorflow as tf

from PIL import Image
from object_detection.utils import dataset_util
from collections import namedtuple, OrderedDict

def example(group,path):
    with tf.io.gfile.GFile(os.path.join(path, '{}'.format(group.filename)), 'rb') as fid:
        encoded_jpg = fid.read()
    encoded_jpg_io = io.BytesIO(encoded_jpg)
    image = Image.open(encoded_jpg_io)
    width, height = image.size

    filename = group.filename.encode('utf8')
    image_format = b'jpg'
    xmins = []
    xmaxs = []
    ymins = []
    ymaxs = []
    classes_text = []
    classes = []

    for index, row in group.object.iterrows():
        xmins.append(row['xmin'] / width)
        xmaxs.append(row['xmax'] / width)
        ymins.append(row['ymin'] / height)
        ymaxs.append(row['ymax'] / height)
        classes_text.append(row['class'].encode('utf8'))
        classes.append(class_text_to_int(row['class']))

    tf_example = tf.train.Example(features=tf.train.Features(feature={
        'image/height': dataset_util.int64_feature(height),
        'image/width': dataset_util.int64_feature(width),
        'image/filename': dataset_util.bytes_feature(filename),
        'image/source_id': dataset_util.bytes_feature(filename),
        'image/encoded': dataset_util.bytes_feature(encoded_jpg),
        'image/format': dataset_util.bytes_feature(image_format),
        'image/object/bbox/xmin': dataset_util.float_list_feature(xmins),
        'image/object/bbox/xmax': dataset_util.float_list_feature(xmaxs),
        'image/object/bbox/ymin': dataset_util.float_list_feature(ymins),
        'image/object/bbox/ymax': dataset_util.float_list_feature(ymaxs),
        'image/object/class/text': dataset_util.bytes_list_feature(classes_text),
        'image/object/class/label': dataset_util.int64_list_feature(classes),
    }))
    return tf_example


def group(df,attribute):
    data = namedtuple('data',['file_name','object'])
    df = df.groupby(attributee)
    return [data(file_name,df.get_group(x)) for filename, x in zip(df.groups.keys(), df.groups)]   

def class_label_to_int(label):
    if label == 'coca_cola':
        return 1
    elif label == 'jugo_jumex':
        return 2
    elif label == 'danup':
        return 3
    else:
        None  

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Generates TF records")
    parser.add_argument('-i', '--input', type=str, required=True, help='Specify path to csv input.')
    parser.add_argument('-o', '--output', type=str, required=True, help='Specify the output directory path')
    parser.add_argument('-p', '--images', type=str, required=True, help='Specify path to image directory')
    args = parser.parse_args()

    writer = tf.io.TFRecordWriter(args.output)
    df = pd.read_csv(args.input)
    image_path = os.path.join(args.images)
    grouped = group(df,'filename')

    for group in grouped:
        tf_example = example(group, path)
        writer.write(tf_example.SerializeToString())

    writer.close()
    output = os.path.join(os.getcwd(),args.output)
    print ("created Tf records in the format {}".format(output))
