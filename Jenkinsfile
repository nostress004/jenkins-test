pipeline {
    agent any
    tools {
        nodejs 'Node21.6.1'
    }
    stages {
        stage('Build') {
            steps {
                // checkout scmGit(branches: [[name: 'main']], extensions: [], userRemoteConfigs: [[credentialsId: 'Github', url: 'https://github.com/nostress004/jenkins-test.git']])
                sh 'npm install'
            }
        }
        stage('Start cypress container') {
            steps {
                // sh 'npm run test'
                sh './ci/run-cypress.sh'
                /*script{
                      // Lekérdezzük a Docker host URL-jét
                    def dockerHost = sh(script: 'echo $DOCKER_HOST', returnStdout: true).trim()

                    echo "Docker Host URL: ${dockerHost}"
                    docker.image('cypress/base').inside{
                        sh 'ls'
                    }
                    sh('npm run cypress:test') 
                }*/
            }
        }
        stage('Stop Cypress container') {
            steps {
               sh './ci/stop-cypress.sh'
            }
        }
    }
}