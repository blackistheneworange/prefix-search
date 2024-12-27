
import DUMMY_DATA from './dummy_data.js';
import PrefixSearch from './lib/prefix-search.js';

const prefixSearch = new PrefixSearch();

const results_display_el = document.querySelector('.result .result_display');
const words_box_el = document.querySelector('.words_box');
const result_input_el = document.querySelector(".result .result_input");

function addWordsToWordsBox(words){
    words_box_el.innerHTML = '';
    for(const word of words){
        const div_el = document.createElement('div');
        const inner_div_el = document.createElement('div');

        inner_div_el.classList.add('word');

        const span_el = document.createElement('span');
        span_el.textContent = word;
        
        const button_el = document.createElement('button');
        button_el.textContent = 'X';
        button_el.setAttribute('data-word', word);
        button_el.onclick = handleRemoveWord;

        inner_div_el.appendChild(span_el);
        inner_div_el.appendChild(button_el);

        div_el.appendChild(inner_div_el);

        if(words_box_el.children.length === 0) words_box_el.appendChild(div_el);
        else words_box_el.insertBefore(div_el, words_box_el.children[0]);
    }
}

function printResults(words, empty_input){
    results_display_el.innerHTML = '';

    if(empty_input) {
        document.querySelector('.result_display_container').style.transform = 'scaleY(0)';
        return;
    }
    
    document.querySelector('.result_display_container').style.transform = 'scaleY(1)';

    if(words.length === 0) {
        const li_el = document.createElement('li');
        li_el.textContent = "No matching words found";
        li_el.classList.add('empty_result');
        li_el.setAttribute('data-no-hide','true');
        
        results_display_el.appendChild(li_el);
    }
    for(const word of words){
        const li_el = document.createElement('li');
        li_el.textContent = word;
        li_el.onclick = handleSetInput;

        results_display_el.appendChild(li_el);
    }
}

function handleSetInput(ev){
    result_input_el.value = ev.target.textContent;
}

function handleAddWords(ev){
    ev.preventDefault();
    
    const words = ev.target["words"].value.split("\n").join(",").split(",");
    if(!words || words[0].length === 0) {
        return;
    }
    
    addWords(words);
    ev.target["words"].value = "";
}

function addWords(words){
    prefixSearch.addWords(words);
    addWordsToWordsBox(prefixSearch.words);
}

function handleRemoveWord(ev){
    const word_to_remove = ev.target.getAttribute('data-word');
    prefixSearch.removeWords([word_to_remove]);

    ev.target.parentNode.parentNode.remove();
    if(prefixSearch.words.length === 0) setEmptyWordsBoxMessage();
}

function handleRemoveWords(){
    words_box_el.innerHTML = '';
    prefixSearch.removeWords([...prefixSearch.words]);
    
    setEmptyWordsBoxMessage();
}

function handleSearchWords(ev, show_display=true){
    const value = ev.target.value;
    
    if(show_display) {
        results_display_el.classList.remove('hide');
    }
    
    if(!value || value.length === 0) {
        printResults([], true);
    }
    else printResults(prefixSearch.getPrefixMatches(value));
}

function handleHideResults(ev){
    const should_hide = ev.target.getAttribute('data-no-hide') !== 'true';
    if(should_hide) results_display_el.classList.add('hide');
}

function handleToggleIgnoreCase(ev){
    prefixSearch.ignore_case = ev.target.checked;
    handleSearchWords({target: result_input_el}, false);
}

function setEmptyWordsBoxMessage(){
    const h3_el = document.createElement('h3');
    h3_el.classList.add('empty_message');
    h3_el.textContent = 'WORDS BOX IS EMPTY';

    words_box_el.appendChild(h3_el);
}
addWords(DUMMY_DATA);


document.querySelector(".words_input_form").addEventListener("submit", handleAddWords);
result_input_el.addEventListener("keyup", handleSearchWords);
result_input_el.addEventListener("focus", handleSearchWords);
document.addEventListener("click", handleHideResults);
document.querySelector("#ignore_case_input").addEventListener("change", handleToggleIgnoreCase);
document.querySelector("button.clear_button").addEventListener("click", handleRemoveWords);