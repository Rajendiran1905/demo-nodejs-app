pipeline {
  agent any

  stages {
    stage("print something") {
      input {
          message 'Should i continue'
          ok 'Proceed'
      }
      steps {
        sh 'echo "My name is something"'
        sh 'echo "$TAG_NAME tag name"'
      }
    }
  }
}
