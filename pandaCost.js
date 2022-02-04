function pandaCost(singara, somocher, jelape) {
    const singaraPrice = 7*singara;
    const somocherPrice = 10*somocher;
    const jelapePrice = 15*jelape;

    const totalCost = singaraPrice + somocherPrice + jelapePrice;
    
    return totalCost;
}

const result = pandaCost(5,5,5);

console.log(result);