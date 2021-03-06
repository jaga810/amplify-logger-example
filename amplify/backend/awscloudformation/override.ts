import { AmplifyRootStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyRootStackTemplate) {
    const accountId = '023443833694'
    const region = 'us-east-1'
    const loggerPrefix = 'amplify-logger'

    const loggerPolicy =
    {
        'policyDocument': {
            'Version': '2012-10-17',
            'Statement': [
                {
                    'Effect': 'Allow',
                    'Action': 'logs:PutLogEvents',
                    'Resource': `arn:aws:logs:${region}:${accountId}:log-group:/${loggerPrefix}/*:log-stream:*`,
                },
                {
                    'Effect': 'Allow',
                    'Action': [
                        'logs:CreateLogStream',
                        'logs:CreateLogGroup',
                        'logs:DescribeLogStreams',
                    ],
                    'Resource': `arn:aws:logs:${region}:${accountId}:log-group:/${loggerPrefix}/*`
                },
                {
                    'Effect': 'Allow',
                    'Action': [
                        'logs:DescribeLogGroups',
                    ],
                    'Resource': `arn:aws:logs:${region}:${accountId}:log-group:*`
                }
            ]
        },
        'policyName': 'amplifyLoggerCloudWatchLogsPolicy'
    }

    resources.authRole.policies = [
        loggerPolicy
    ]
    resources.unauthRole.policies = [
        loggerPolicy
    ]
}
