import TrieNode from "./TrieNode.js";
import { getAsciiFromChar } from "./utils/get-ascii-from-char.js";
import { getCharFromAscii } from "./utils/get-char-from-ascii.js";
import { isLowerCase } from "./utils/is-lower-case.js";
import { isUpperCase } from "./utils/is-upper-case.js";
import { toLowerCase } from "./utils/to-lower-case.js";
import { toUpperCase } from "./utils/to-upper-case.js";

class Trie {
    #words;
    #root;
    #ignore_case;

    constructor(){
        this.#words = [];
        this.#root = new TrieNode();
        this.#ignore_case = false;
    }
    

    get words(){ return this.#words };
    
    set ignore_case(value){ this.#ignore_case = Boolean(value) };

    #addWord(word){
        if(this.#words.includes(word)){
            return;
        }

        this.#words.push(word);
        let trie_node = this.#root;
        for(let word_index = 0; word_index<word.length; word_index++){
            trie_node.passed_through++;
            
            const char_index = getAsciiFromChar(word[word_index]);
            if(!trie_node.children[char_index]) trie_node.children[char_index] = new TrieNode();

            trie_node = trie_node.children[char_index];
        }
        trie_node.passed_through++;
        trie_node.end_of_word = true;
    }

    addWords(words){
        for(const word of words){
            this.#addWord(word.trim());
        }
    }

    #getWords(curr_word, trie_node, results=[]){
        if(trie_node.end_of_word) results.push(curr_word);

        for(let i=0;i<128;i++){
            if(trie_node.children[i]){
                const char = getCharFromAscii(i);
                this.#getWords(curr_word+char, trie_node.children[i], results)
            }
        }
        return results;
    }

    removeWords(words){
        for(const word of words) {
            this.#removeWord(word);
        }
    }

    #removeWord(word){
        if(!this.#words.includes(word)){
            throw new Error("Word does not exist.");
        }

        this.#words.splice(this.#words.indexOf(word), 1);
        this.#_removeWord(word, this.#root, 0);
    }
    
    #_removeWord(word, trie_node, word_index){
        if(!trie_node) return false;
        
        trie_node.passed_through--;
        if(word_index === word.length){
            if(trie_node.end_of_word) {
                trie_node.end_of_word = false;
                return true;
            }
            return false;
        }

        const char_index = getAsciiFromChar(word[word_index]);
        const child_trie_node = trie_node.children[char_index];
        if(!this.#_removeWord(word, child_trie_node, word_index+1)) return false;
        
        if(child_trie_node.passed_through === 0){
            trie_node.children[char_index] = undefined;
        }
        
        return true;
    }
    
    getPrefixMatches(prefix){
        if(!prefix || prefix.length === 0) return [];
        return this.#getPrefixMatches(prefix, 0, this.#root);
    }

    #getPrefixMatches(prefix, prefix_index, trie_node){
        if(!trie_node) return [];
        if(prefix_index === prefix.length) return this.#getWords(prefix, trie_node, []);

        const char_index = getAsciiFromChar(prefix[prefix_index]);
        const opposite_case_char_index = isLowerCase(char_index) ? toUpperCase(char_index) : isUpperCase(char_index) ? toLowerCase(char_index) : undefined;

        let result = this.#getPrefixMatches(prefix, prefix_index+1, trie_node.children[char_index]);

        if(this.#ignore_case && opposite_case_char_index) {
            prefix = prefix.slice(0, prefix_index)+getCharFromAscii(opposite_case_char_index)+prefix.slice(prefix_index+1, prefix.length);
            result = [...result, ...this.#getPrefixMatches(prefix, prefix_index+1, trie_node.children[opposite_case_char_index])];
        }
        
        return result;
    }
}

export default Trie;