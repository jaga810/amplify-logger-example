import { Amplify, Logger, AWSCloudWatchProvider} from 'aws-amplify'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import awsExports from './aws-exports'

const loggerPrefix = 'amplify-logger'
const appName = 'test-app'
const username = 'test-user' //実際に利用するときは、未認証ユーザーにはUUID、認証済みユーザーにはusernameなどの識別子を入れてログを取ると良さそう

Amplify.configure({
  Logging: {
    logGroupName: `/${loggerPrefix}/${appName}/${process.env.NODE_ENV}`,
    logStreamName: username,
  },
  ...awsExports,
})

const LOG_LEVEL = 'INFO' //どのレベルのログまでロギングするか。デフォルトの値はWARN

const logger = new Logger('TestLogger', LOG_LEVEL)
Amplify.register(logger)
logger.addPluggable(new AWSCloudWatchProvider())

export default function App() {
  logger.error(username, 'test error')
  logger.warn(username, 'test warn')
  logger.info(username, 'test info')
  logger.debug(username, 'test debug')

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}