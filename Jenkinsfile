pipeline {
    agent none // Don't use a default agent
    stages {
        stage('Checkout Code') {
            agent { label 'master' }  // Run checkout on the Jenkins master node
            steps {
                checkout scm
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-u root'
                }
            }
            steps {
                sh '''
                node --version
                npm --version
                npm install
                npm run build
                '''
            }
        }
    }
}
