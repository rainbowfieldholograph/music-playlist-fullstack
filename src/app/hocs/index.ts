import compose from 'compose-function';
import { withApollo } from './with-apollo';

export const withProviders = compose(withApollo);
