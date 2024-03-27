import os
import shutil

def rename_photos():
    path = input("copy paste path ")
    prefix = input("what name ")
          
    i=1
    files = os.listdir(path)
    files.sort
    for filename in files:
        extension = filename.split(".")[1].lower()
        if extension in ["webp" ,"avif","jpg","gif","png","svg","png","bmp"]:
            print(filename)
            source= path +"/"+filename
            destination= path + "/" + prefix + str(i) + "." + extension
            os.rename(source,destination)
            i+=1

def copy_file():
    og= '/Users/noahbalewicz/Desktop/shrek/hi1.webp'
    filename,extend= og.split('.')
    for i in range(5):
        copy_filename=filename+' - Copy ' + str(i+1) + '.' + extend
        print(copy_filename)
        shutil.copyfile(og,copy_filename)

# rename_photos()
copy_file()

