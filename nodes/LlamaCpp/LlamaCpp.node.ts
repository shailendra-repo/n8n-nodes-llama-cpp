import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class LlamaCpp implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Llama Cpp',
        name: 'llamaCpp',
        icon: 'file:LlamaCppImg.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Get data Llama Cpp API',
        defaults: {
            name: 'Llama CPP',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'LlamaCppApi',
                required: false,
            },
        ],
        requestDefaults: {
            baseURL: 'https://localhost:8000',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
		properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'LLM Query',
                        value: 'llm',
                    }
                ],
                default: 'llm',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: [
                            'llm',
                        ],
                    },
                },
                options: [
                    {
                        name: 'Get',
                        value: 'get',
                        action: 'Get the response from LLM',
                        description: 'Query from LLM',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/llm',
                            },
                        },
                    },
                ],
                default: 'get',
            },

            // Optional/additional fields will go here
        
        ]
	};
}