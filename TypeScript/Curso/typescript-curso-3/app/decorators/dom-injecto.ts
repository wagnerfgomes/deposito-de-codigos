export function domInjection(seletor: string) {
    return function (target: any, propertyKey: string) {
        let elemento: HTMLElement;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor) as HTMLElement;
                console.log(`buscando HTMLElement: ${seletor}`);
                
                return elemento;
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
