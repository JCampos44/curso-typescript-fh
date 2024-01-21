(() => {
    let flash: {
        age?: number;
        name: string;
        powers: string[];
        getName?: () => string;
    } = {
        age: 24,
        name: 'Barry Allen',
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };

    let superman: {
        age?: number;
        name: string;
        powers: string[];
        getName?: () => string;
    } = {
        age: 60,
        name: 'Clark Kent',
        powers: ['Super velocidad'],
    };

    console.log(flash);
})();
