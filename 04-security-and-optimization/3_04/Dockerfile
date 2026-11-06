FROM docker:cli
WORKDIR /usr/src/app

COPY . .
RUN chmod 700 builder.sh

ENTRYPOINT [ "./builder.sh" ]