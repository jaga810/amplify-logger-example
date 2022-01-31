# Overview
This is a sample repository to show how to use Amplify Logger with CloudWatch Logs.
Detailed explanation is below
- [AmplifyでウェブフロントエンドのログをCloudWatchに送る](https://zenn.dev/jaga/articles/amplify-logger-with-cwlogs)

# How to deploy to your account

```bash
git clone https://github.com/jaga810/amplify-logger-example.git
cd amplify-logger-example
amplify init # all the input are default choice except for AWS Profile
# It's OK to result in error with Error: File at path: 'amplify-logger-example/amplify/backend/auth/amplifyloggertestf51009edf51009ed/build/parameters.json' does not exist.
amplify push -y
npm start
```