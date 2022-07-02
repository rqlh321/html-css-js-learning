import dictionary_main_screen from './store/firestore.js';

export default class CloudDictionary {

    #dictionary;

    constructor(language) {
        const data = await dictionary_main_screen()
        this.#dictionary = new Map(Object.entries(data[language]))
    }

    get(key) {
        let result = this.#dictionary.get(key)
        return result == null ? key : result
    }
}