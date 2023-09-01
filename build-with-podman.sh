#/bin/env sh

podman build . -t bachelor-builder
podman run --rm bachelor-builder | tar xz
