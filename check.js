function check(formula) {
    var old_formula;
    old_formula = formula;
    formula = formula.replace(/(\()[^\(]*$/, function (formula) {
        if (/(\(([A-Z]|[10])(([\&\|\~])|(\-\>))([A-Z]|[10])\))/.test(formula)) {
            return formula = formula.replace(/(\(([A-Z]|[10])(([\&\|\~])|(\-\>))([A-Z]|[10])\))/, '1')
        }
        else {
            return formula = formula.replace( /(\(\!([A-Z]|[10])\))/, '1')
        }
    });
    if(old_formula!=formula){
        formula = check(formula);
    }
    if (!/[\(\)]/.test(formula) && (/[A-Z]/.test(formula)|/[10]/.test(formula)) && formula.length==1)
        return formula
    else
        return 0
};


function print(formula){
    if(check(formula)){
        return "Является формулой"
    }else{
        return "Не является формулой"
    }
}