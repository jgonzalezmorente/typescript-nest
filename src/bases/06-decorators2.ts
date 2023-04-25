const Deprecated = (deprecationReason: string) => {

    return ( _target: any, propertyKey: string, descriptor: PropertyDescriptor ) => {        
        return {
            get() {                
                const wrapperFn = (...args: any[]) => {
                    console.warn(`Method ${ propertyKey } is deprecated with reason: ${ deprecationReason }`);
                    descriptor.value.apply( this, args );
                }
                return wrapperFn;
            }
        }
    }   
}


export class Pokemon {

    constructor(
        public readonly id:number,
        public name: string
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!` );
    }

    @Deprecated( 'Most use speak2 method instead' )
    speak() {
        console.log(`${ this.name }, ${ this.name }` );
    }
}


export const charmander = new Pokemon( 4, 'Charmander' );
charmander.speak();