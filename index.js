//takes a function as an argument 
function receivesAFunction(callback){
    callback();

}
function returnsANamedFunction(){
    return function namedFunction(){

    };
}
function returnsAnAnonymousFunction(){
    return function (){

    };
}