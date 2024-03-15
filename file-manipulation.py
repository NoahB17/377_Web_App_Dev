import os

def rename_photos():
    path = input("copy paste path")
    prefix = input("what name")
    
    i=1

    for filename in os.listdir(path):
        extension = filename.split(".")[1].lower()
        if extension in ["webp" ,"avif","jpg","gif","png","svg","png","bmp"]:
            print(filename)
            source= path +"/"+filename
            destination= path + "/" + prefix + str(i) + "." + extension
            os.rename(source,destination)
            i+=1

rename_photos()