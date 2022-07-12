function log(v) {
    if (v) { console.log('ok'); }
    else { console.log('no'); }
}

log(true); //ok
log(false);//no
log('true'); //ok (truthy)
log('false');//ok (truthy)
log({});//ok (truthy)
log([]);//ok (truthy)
log(NaN);//no. It is considered a falsy value
log(0);//no. It is considered a falsy value
log(1);//ok (truthy)
log(undefined);//no. It is considered a falsy value
log(null);//no. It is considered a falsy value