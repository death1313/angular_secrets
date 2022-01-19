pipeline {

  agent none

  environment {
    BUILD_OUTPUT_PATH = "dist/angular-secrets"
    DEPLOY_FOLDER = "/"
    PUBLISH_CONFIG_NAME = ""
  }


  stages {

    stage('Pre') {
      agent none
      steps {
        script {
          def buildNumber = BUILD_NUMBER as int; if (buildNumber > 1) milestone(buildNumber - 1); milestone(buildNumber)
        }
      }
    }


    stage('Install') {
      agent any
      steps {
        bat 'npm install --force'
      }
    }


    stage('Build') {
      agent any
      steps {
        bat 'npm build'
      }
    }

  }

