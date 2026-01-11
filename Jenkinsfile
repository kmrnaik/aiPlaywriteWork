pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
                // Install browser dependencies
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                // Generate Allure report
                sh '''
                npx allure generate allure-results --clean -o allure-report
                '''
            }
        }

        stage('Publish Allure Report') {
            steps {
                // Publish Allure report (requires Allure plugin in Jenkins)
                allure includeProperties: false, jdk: '', reportBuildPolicy: 'ALWAYS', results: [[path: 'allure-results']]
            }
        }
    }

    post {
        always {
            // Archive test results and reports
            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
        }
        failure {
            // Notify on failure (optional)
            echo 'Build failed!'
        }
    }
}