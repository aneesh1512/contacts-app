import { AbstractControl, ValidationErrors } from "@angular/forms";

export function restrictWordsDynamic(words: string[]){
    return (form: AbstractControl): ValidationErrors| null => {
        const arr = words.map(w => form.value.includes(w)? w: null)
        .filter(w => w !== null);
        console.log('herer', arr)
        return arr.length > 0 ? { restrictWords: arr.join(', ') } : null;
    }
}