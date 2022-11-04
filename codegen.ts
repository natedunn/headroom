import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.PUBLIC_GRAPHQL_ENDPOINT,
  documents: ['src/lib/client/**/*.ts'],
  emitLegacyCommonJSImports: false,
  generates: {
    'src/lib/codegen/_generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'urql-introspection', 'typescript-urql'],
      config: {
        withRefetchFn: true,
        documentVariableSuffix: 'Query',
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          enumValues: 'change-case-all#upperCase',
        },
      },
    },
  },
};

export default config;
