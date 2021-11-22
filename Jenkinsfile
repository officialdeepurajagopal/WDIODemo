pipeline {
    agent any

    tools { nodejs "Node v12.22.1" }

    stages {
        stage('Checkout SCM') {
           steps {
               checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'afa4ef5f-6838-4a28-b3f6-2b40b8c92718', url: 'https://github.com/officialdeepurajagopal/WDIODemo.git']]])
           }
       }

       stage('Install Node Modules') {
           steps {
               sh 'npm install'
           }
       }

       stage('Run Test') {
           steps {
               sh 'npm run test'
           }
       }
    }
    post {
        always {
            allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'reports/allure-results']]
            ])
        }
        success {
           mail bcc: '', body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "beingdeepurajagopal@gmail.com";
        }
        unstable {
            echo 'Tests are unstable :/'
        }
        failure {
          echo 'Failed....!'
        }
        changed {
            echo 'Results were different before...'
        }
    }
}