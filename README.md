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

### Importing Trie class
```
import Trie from '/dist/trie-search.js'
```

### Using Trie class instance
```
const TrieSearch = new Trie();
TrieSearch.addWords(['word 1', word 2']);
TrieSearch.removeWords(['word 2']);
```

### Getting prefix matches using the instance
```
TrieSearch.getPrefixMatches('prefix string');
```

### Toggle case sensitivity
```
TrieSearch.ignore_case = true
```

### Get list of added words
```
TrieSearch.words
```
