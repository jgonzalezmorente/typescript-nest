
export let name: string = 'Fernando';
export const age = 35;
export const isValid: boolean = true;

name = 'Melissa';

export const templateString = ` Esto es un string
multilínea
que puede tener
" dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
números: ${ age }
booleanos: ${ isValid }`;

console.log( templateString );