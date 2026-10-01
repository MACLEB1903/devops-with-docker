FROM amazoncorretto:8-alpine3.24-full

WORKDIR /usr/src/app

COPY . .

RUN chmod +x mvnw
RUN ./mvnw package

CMD ["java", "-jar" , "./target/docker-example-1.1.3.jar"]

EXPOSE 8080