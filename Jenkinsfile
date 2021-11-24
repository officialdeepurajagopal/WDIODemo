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
           echo 'passed'
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

        stage('Email Report') {
    // Change the recipent address
    sh "zip -r allure-report.zip allure-report"
    def mailRecipients = "godsdeepu@gmail.com"
    env.ForEmailPlugin = env.WORKSPACE
    if(fileExists('allure-report.zip')){
        emailext(
            to: "${mailRecipients}",
            from: "beingdeepurajagopal@gmail.com",
            subject: "Allure Report",
            body: "PFA",
            attachmentsPattern: 'allure-report.zip'
        )
    } else{
        echo("COULD NOT FIND FILE TO ATTACH")
        }
}
    }
}