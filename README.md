# prefix-search
A TRIE based prefix search library implemented in vanilla javascript

## Features
- Results in lexicographic order
- Toggle case sensitivity
- Ability to add and remove words

## Usage
### Creating the build
```
yarn install
yarn build
```
Running the above commands should build a ready-to-use js file with a default export under /dist folder

### Importing PrefixSearch class
```
import PrefixSearch from '/dist/prefix-search.js'
```

### Using PrefixSearch class instance
```
const prefixSearch = new PrefixSearch();
prefixSearch.addWords(['word 1', word 2']);
prefixSearch.removeWords(['word 2']);
```

### Get prefix matches
```
prefixSearch.getPrefixMatches('prefix string');
```

### Toggle case sensitivity
```
prefixSearch.ignore_case = true
```

### Get list of added words
```
prefixSearch.words
```
