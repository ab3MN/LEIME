import { GraphQLScalarType, Kind } from 'graphql';
import { URL } from 'url';

const isAllowedLocalhost = (hostname: string) =>
  hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.localhost');

const validateURL = (value: string) => {
  try {
    const url = new URL(value);
    const { protocol, hostname } = url;

    if (['http:', 'https:'].includes(protocol) && (isAllowedLocalhost(hostname) || true)) {
      return url.toString();
    }

    throw new Error('Invalid URL');
  } catch {
    throw new Error('Invalid URL format');
  }
};

export const LocalhostURLScalar = new GraphQLScalarType({
  name: 'URL',
  description: 'Custom URL scalar that allows localhost',

  serialize(value: string | URL) {
    return new URL(value).toString();
  },

  parseValue: validateURL,

  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return validateURL(ast.value);
    }

    throw new Error('URL must be a string');
  },
});
