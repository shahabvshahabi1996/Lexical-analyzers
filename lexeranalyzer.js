$( document ).ready(function(){

    var keyword = ["int","void","main()","float","if","while","for","else","void","switch","case","char","do","if","return","cin>>","cout<<"];
    var Rel_Operators = ["=","==",">","<",">=","<=","&&","||","!=","<<",">>"];
    var Math_Operators = ["+","*","/","-","%"];
    var Delimiter=["{","}",";",",","[","]","(",")","*/",":","'"];
    var Num = ["1","2","3","4","5","6","7","8","9","0"];
    var token = [];
    var j = 0;
    $('#Run_Compile').click(function(){
        var inputcode = $('.code-editor').val();
        var Bigcode = inputcode.replace(/\n/g, '');
        var Smallcode = Bigcode.split(" ");
        console.log(Smallcode);
        var flag;
        for( i = 0; i<Smallcode.length;i++){
            flag = 0;
            for(j = 0; j<keyword.length;j++){
                if(Smallcode[i] == keyword[j]){
                    token.push("KeyWord(" + Smallcode[i] + ")\n");
                    flag = 1;
                }
            }
            for(j = 0; j<Rel_Operators.length;j++){
                if(Smallcode[i] == Rel_Operators[j]){
                    token.push("Relational Operators(" + Smallcode[i] + ")\n");
                    flag = 1;
                }
            }
            for(j = 0; j<Math_Operators.length;j++){
                if(Smallcode[i] == Math_Operators[j]){
                    token.push("Math Operators(" + Smallcode[i] + ")\n");
                    flag = 1;
                }
            }
            for(j = 0; j<Delimiter.length;j++){
                if(Smallcode[i] == Delimiter[j]){
                    token.push("Delimiter(" + Smallcode[i] + ")\n");
                    flag = 1;
                }
            }
            for(j = 0; j<Num.length;j++){
                if(Smallcode[i] == Num[j]){
                    token.push("Number(" + Smallcode[i] + ")\n");
                    flag = 1;
                }
            }
            if(flag == 0){
                    token.push("Identifier(" + Smallcode[i] + ")\n");
                    flag = 0;
            }
        } 
        token = token.join("");
        console.log(token);
    $('.console').val(token);
    });
});