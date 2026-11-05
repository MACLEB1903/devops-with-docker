#!/bin/bash

if [ "$#" -eq 2 ]; then
    echo "Cloning the repository..."
    git clone "https://github.com/$1.git"

    dir="$(ls -td */ | head -n 1)"
    docker_image="${dir%/}-image:latest"
    cd "$dir"

    echo "Building the image..."
    docker build -t $docker_image .

    docker tag $docker_image $2
    docker push $2

else
    echo "ERROR: Expected number of arguments 2 but got $#."
    exit 1
fi