# bubble-match
returns the first element that matches options.filter when tracking parents from options.el to options.parent

##installation:
```sh
npm install --save bubble-match
```

##usage:
```js
const bubbleMatch = require('bubble-match');
```

##documentation:
#### el
bubble-match will start searching for a matching element with the element passed through `options.el`

### parent
bubble-match will search up to, but not include, `options.parent` unless `matchParent: true` is passed in

#### matchParent
if `true`, bubble-match will include `options.parent` in its search for a matching element

### filter
selector criteria for matching element
