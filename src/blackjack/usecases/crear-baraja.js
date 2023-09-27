import _ from "underscore";

//export const miNombre = "Juan Guillermo";

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna una nueva baraja de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if(!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales obligatorio como un arreglo de string');

    /*
    Se creo esta condicion aparte primero pero luego la juntamos con el "o" || como se ve
    en las lineas de arriba

    if(!tiposDeCarta.length > 0) 
    throw new Error('tiposDeCarta tiene que ser un arreglo de strings');
    */
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

//export default crearDeck;