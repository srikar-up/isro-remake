import os
import shutil

src = os.path.join('image files', 'eart png.png')
dest_public = os.path.join('public', 'earth.png')
dest_assets = os.path.join('src', 'assets', 'earth.png')

os.makedirs('public', exist_ok=True)
os.makedirs(os.path.join('src', 'assets'), exist_ok=True)

if os.path.exists(src):
    shutil.copyfile(src, dest_public)
    shutil.copyfile(src, dest_assets)
    print("SUCCESS: Copied image to public/earth.png and src/assets/earth.png")
else:
    print("ERROR: Source image missing!")
