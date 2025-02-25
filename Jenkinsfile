pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root' // Runs container as root (optional)
        }
    }
    stages {
        stage('Cleanup') {
            steps {
                cleanWs() // Clean workspace before starting
            }
        }
        stage('Install Dependencies') {
            steps {
                sh '''
                node --version
                npm --version
                npm install
                '''
            }
        }
        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
        stage('List Build Files') {
            steps {
                sh 'ls -l'
            }
        }
    }
}
