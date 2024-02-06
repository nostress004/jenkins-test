docker build -t cypress-test .
docker run -d --name cypress-container cypress-test