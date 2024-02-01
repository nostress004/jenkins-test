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
        stage('Test') {
            steps {
                // sh 'npm run test'
                script{
                    sh('npm run cypress:test')
                }
            }
        }
    }
}