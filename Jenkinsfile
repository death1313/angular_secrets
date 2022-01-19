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


    stage('Deploy') {
      agent any
      steps {
        dir(env.BUILD_OUTPUT_PATH) {
          cifsPublisher(publishers: [[
            configName: env.PUBLISH_CONFIG_NAME,
            transfers:[[
              cleanRemote: true,
              excludes: '',
              flatten: false,
              makeEmptyDirs: true,
              noDefaultExcludes: false,
              patternSeparator: '/',
              remoteDirectory: env.DEPLOY_FOLDER,
              remoteDirectorySDF: false,
              removePrefix: '',
              sourceFiles: '**/*'
            ]],
            usePromotionTimestamp: false,
            useWorkspaceInPromotion: false,
            verbose: false]]
          )
        }
        cleanWs cleanWhenAborted: false, cleanWhenFailure: false, cleanWhenNotBuilt: false, cleanWhenUnstable: false, notFailBuild: true
      }
    }
  }

}
