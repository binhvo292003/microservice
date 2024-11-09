pipeline {
    agent any

    stages {
        stage('Git Stage') {
            steps {
                git branch: 'main', url: 'https://github.com/binhvo292003/microservice.git'
            }
        }

        stage('Build and Push Docker Image'){
            steps {
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t binhvo292003/microservice .'
                    sh 'docker push binhvo292003/microservice'  
                }
            }
        }
    }
}
