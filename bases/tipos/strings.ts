(() => {
    const batman: string = 'Batman';
    const linternaVeder: string = 'Linterna Verde';
    const volcanNegro: string = `Héroe: Volcán Negro`;

    console.log(`I'm ${batman}`);

    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No está presente');
})();