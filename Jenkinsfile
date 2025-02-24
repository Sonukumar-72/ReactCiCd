pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root' // Runs container as root (optional)
        }
    }
    stages {
        stage('Build') {
            steps {
                sh '''
                ls -l 
                node --version 
                npm --version
                npm install 
                npm run build
                '''
            }
        }
    }
}
