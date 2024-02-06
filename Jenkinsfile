pipeline {
    agent {
        docker
    }
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
                sh './ci/run-cypress.sh'
                /*script{
                    def asd = sh(script: 'ls', returnStdout: true).trim()

                    echo "Docker Host URL: ${asd}"
                }*/

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
               //sh './ci/stop-cypress.sh'
               //sh './ci/stop-cypress.sh'
               script{
                echo 'ls'
               }
            }
        }
    }
}