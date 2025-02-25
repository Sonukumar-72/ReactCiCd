
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
                cleanWs() // Clean workspace
            }
        }
        stage('Checkout Code') {  // 🛠️ Ensure repo is available after cleanup
            steps {
                checkout scm
                sh 'ls -l' // Debugging: Check if package.json is present
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
