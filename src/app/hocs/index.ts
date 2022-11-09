import compose from 'compose-function';
import { withApollo } from './withApollo';

export const withProviders = compose(withApollo);
