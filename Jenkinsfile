pipeline {
  agent any

  stages {
    stage("print something") {
      steps {
        input {
          message: 'Should i continue'
          ok: 'Proceed'
        }
        sh 'echo "My name is something"'
      }
    }
  }
}
