function phoneNumberValidator(str){
    if(!balanced(str)){
        return false;
    }
    var newStr=str.replace(/\s/g, '');
    var  patt=/^1?\d{3}-?\?\d{3}-?\d{4}$/;
    return patt.test(newStr);
}
function balanced(string){
    var stack=[];
    var paris={
        '[':']',
        '{':'}',
        '(':')',
    };
    var closers={
        ')':1,
        ']':1,
        '}':1
    };
    for(var i=0;i<string.length;i++){
        var cur =string[i];
        if(paris[cur]){
            stack.push(paris[curl]);
        }
    }
    else if(cur in closers){
        if(stack[stack.length -1]===cur){
            stack.pop();
        }
        else{
            return false;
        }

    }
    }
    return !stack.length;
}