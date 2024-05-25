import { writeFileSync } from 'fs';
import { getDefaultSchemaTSOptions } from 'schema-typescript';

import schema from '../../../__fixtures__/openapi/swagger.json';
import { generateOpenApiClient } from '../src/openapi';

it('swagger', () => {
  const options = getDefaultSchemaTSOptions({
    // include: [
    //     '*.v1.*'
    // ],
    exclude: [
      '*.v1beta1.*',
      '*.v2beta1.*',
      'io.k8s.api.events.v1.EventSeries',
      'io.k8s.api.events.v1.Event',
      'io.k8s.api.flowcontrol*'
    ]
  })
  const code = generateOpenApiClient({
    ...options,
    // version: 'v1',
    paths: {
      exclude: [
        '*flowschema*',
        '*v1beta1*',
        '*v2beta1*'
      ],
      excludeRequests: [
        'head',
        'options'
      ],
      excludeTags: [
        'storage_v1beta1',
        '*v1beta1',
        '*v2beta1',
        '*v1beta1*',
        '*v2beta1*'
      ]
    },
    includeTypeComments: true,
    includeMethodComments: true,
    mergedParams: false,
    namingStrategy: {
      useLastSegment: true,
      renameMap: {
        'io.k8s.api.discovery.v1.EndpointPort': 'DiscoveryEndpointPort',
        'io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference': 'ApiExtServiceReference',
        'io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig': 'ApiExtWebhookClientConfig',
        'io.k8s.api.admissionregistration.v1.ServiceReference': 'AdmissionServiceReference'
      }
    }
  }, schema as any);
  expect(code).toMatchSnapshot();
  writeFileSync(__dirname + '/../../../__fixtures__/output/swagger-client.ts', code);
});

it('merged', () => {
  const options = getDefaultSchemaTSOptions({
    // include: [
    //     '*.v1.*'
    // ],
    includeMethodComments: true,
    namingStrategy: {
      useLastSegment: true
    }
  })
  const code = generateOpenApiClient({
    ...options,
    version: 'v1',
    mergedParams: true
  }, schema as any);
  expect(code).toMatchSnapshot();
  writeFileSync(__dirname + '/../../../__fixtures__/output/swagger-client.merged.ts', code);
});

it('openapi', () => {
  const data = Object.keys(schema.definitions)
  writeFileSync(__dirname + '/../../../__fixtures__/output/swagger-definitions.json', JSON.stringify(data, null, 2));
});