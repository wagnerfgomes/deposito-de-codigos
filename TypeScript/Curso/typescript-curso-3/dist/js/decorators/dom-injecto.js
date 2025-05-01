export function domInjection(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando HTMLElement: ${seletor}`);
                return elemento;
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
