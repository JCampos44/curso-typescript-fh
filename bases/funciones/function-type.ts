(() => {
    const addNumbers = (a: number, b: number): number => a + b;

    const greet = (name: string): string => `Hola ${name}`;

    const saveTheWorlds = (): string => `El mundo está salvado!`;

    // let myFunction;
    // let myFunction: (y: number, z: number) => number;
    // let myFunction: (y: string) => string;
    let myFunction: () => string;

    //! myFunction = 10;
    //! console.log(myFunction);

    //! myFunction = addNumbers;
    //! console.log(myFunction(1, 2));

    //! myFunction = greet;
    //! console.log(myFunction('Javier'));

    myFunction = saveTheWorlds;
    console.log(myFunction());
})();
