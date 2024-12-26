class TrieNode {
    children;
    end_of_word;
    passed_through;

    constructor(){
        this.children = [];
        this.end_of_word = false;
        this.passed_through = 0;
    }
}

export default TrieNode;