'use strict';

throw new Error([
    'The combined Local WCMS runtime is retired.',
    'Use `npm run start:wcms:staged` for authoring and publication source operations,',
    'or `npm run start:wcms:online` for delivery and publication target operations.',
    'The legacy configuration and database are retained temporarily as rollback evidence; they are not runtime authorities.'
].join(' '));
