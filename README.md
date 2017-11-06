How to:
* `yarn` to install all dependencies
* `yarn start` to start local webpack server
* `yarn test` to run unit/snapshot tests

Notes

I used React and Redux for this project.

I think it went well, though the redux architecture could be better. Splitting into two Connected Components (`TasksContainer` and `ToastAreaContainer`) made things less clean with saving tasks requiring `getState()`.

I should probably use an external toast notification library.

Improvements - Things I wish I had time for
* Add functional testing
* Make production Webpack config to optimize build files uglify and remove Redux logging
* Finish testing all the async actions
* Extract toast and task objects from reducer into models
* Extend toast model to support different toast types
* Improve accessibility with aria-labels and other WCAG 2.0 requirements
* Extract redux action types into actionTypes file
* Find an elegant way to stub shortId for predictable unit testing. Probably easier to stub out if we had those models.
* Loading indicators
