import argparse
import random
import os
import shutil

def group_images(folder,output,percentage):
    files = os.listdir(folder)
    sample = random.sample(range(0,len(files)), int(len(files)))
    if os.path.exists(output+"/test_sample") != True:
        os.makedirs(output+"/test_sample")
    if os.path.exists(output+"/train_sample") != True:
        os.makedirs(output+"/train_sample")

    for i in range(len(files)):
        if i in sample:
            shutil.copy(folder + '/' + files[i], output + '/train_sample')
        else:
            shutil.copy(folder + '/' + files[i], output + '/test')
            

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Split images into test and training samples")
    parser.add_argument('-f', '--folder', type=str, required=True, help='Directory containing the images')
    parser.add_argument('-o', '--output', type=str, required=True, help='Output directory containing the train/test folder')
    parser.add_argument('--train', type=int, required=False, default = 80, help='Train percentage')
    args = parser.parse_args()
    group_images(args.folder, args.output, args.train)

#only creating train sample  for now. will have a quick look in the morning
#if need to test later before hand just move some images into test_sample