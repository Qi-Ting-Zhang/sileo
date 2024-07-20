#!/bin/bash

set -e
set -x

DEB_DIR="./debs"
PARENT_DIR="$(dirname "$DEB_DIR")"

if [ ! -d "$DEB_DIR" ]; then
  echo "Directory $DEB_DIR does not exist."
  exit 1
fi

ls -l "$DEB_DIR"

dpkg-scanpackages -m "$DEB_DIR" > "$PARENT_DIR/Packages"

bzip2 -fks "$PARENT_DIR/Packages"
gzip -fk "$PARENT_DIR/Packages"

cat <<EOF > "$PARENT_DIR/Release"
Origin: 你看，又急
Label: 贾队长
Suite: stable
Version: 1.0
Codename: qtz
Architectures: iphoneos-arm64 iphoneos-arm64e
Components: main
Description: 自用插件分享，有问题请卸载！！！
EOF
