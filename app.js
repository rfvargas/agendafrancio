var inputTextSelecionado = null;

atualizaAgenda();


function capturaID(Element) {
    // alert(Element.id);
    inputTextSelecionado = Element.id;
} 

function tirarCor() {
    if (inputTextSelecionado != null) {        
        var inputText = inputTextSelecionado;
        // alert("inputText: " + inputText);    
        document.getElementById(inputText).style.backgroundColor = ''; // document.getElementById para referenciar pelo id do elemento/tag do html... que é o input type text selecionado da tag da página do html
        var corInputText = "";
        var elementoInputTextId = document.getElementById(inputText);
        var nomeClasseInputText = elementoInputTextId.className;
        var setLsCorInputText = nomeClasseInputText;
        localStorage.setItem(setLsCorInputText, corInputText);
        // var getLsCorInputText = localStorage.getItem(setLsCorInputText);
        // alert("getLsCorInputText (" + nomeClasseInputText + "): " + getLsCorInputText);
    } else {
        alert("ATENÇÃO!\nSelecione um campo!");  
    }  
}

function pintarAmarelo() {
    if (inputTextSelecionado != null) {
        var inputText = inputTextSelecionado;       
        document.getElementById(inputText).style.backgroundColor = 'rgb(251, 255, 0)'; // document.getElementById para referenciar pelo id do elemento/tag do html... que é o input type text selecionado da tag da página do html
        var corInputText = "rgb(251, 255, 0)";
        var elementoInputTextId = document.getElementById(inputText);
        var nomeClasseInputText = elementoInputTextId.className;
        var setLsCorInputText = nomeClasseInputText;
        localStorage.setItem(setLsCorInputText, corInputText);
        // var getLsCorInputText = localStorage.getItem(setLsCorInputText);
        // alert("getLsCorInputText (" + nomeClasseInputText + "): " + getLsCorInputText);
    } else {
        alert("ATENÇÃO!\nSelecione um campo!");  
    }
}

function pintarLaranja() {
    if (inputTextSelecionado != null) {
        var inputText = inputTextSelecionado;       
        document.getElementById(inputText).style.backgroundColor = 'rgb(255, 160, 35)'; // document.getElementById para referenciar pelo id do elemento/tag do html... que é o input type text selecionado da tag da página do html
        var corInputText = "rgb(255, 160, 35)";
        var elementoInputTextId = document.getElementById(inputText);
        var nomeClasseInputText = elementoInputTextId.className;
        var setLsCorInputText = nomeClasseInputText;
        localStorage.setItem(setLsCorInputText, corInputText);
        // var getLsCorInputText = localStorage.getItem(setLsCorInputText);
        // alert("getLsCorInputText (" + nomeClasseInputText + "): " + getLsCorInputText);
    } else {
        alert("ATENÇÃO!\nSelecione um campo!");  
    }
}

function pintarAzul() {    
    if (inputTextSelecionado != null) {
        var inputText = inputTextSelecionado;       
        document.getElementById(inputText).style.backgroundColor = 'rgb(147, 147, 241)'; // document.getElementById para referenciar pelo id do elemento/tag do html... que é o input type text selecionado da tag da página do html
        var corInputText = "rgb(147, 147, 241)";
        var elementoInputTextId = document.getElementById(inputText);
        var nomeClasseInputText = elementoInputTextId.className;
        var setLsCorInputText = nomeClasseInputText;
        localStorage.setItem(setLsCorInputText, corInputText);
        // var getLsCorInputText = localStorage.getItem(setLsCorInputText);
        // alert("getLsCorInputText (" + nomeClasseInputText + "): " + getLsCorInputText);
    } else {
        alert("ATENÇÃO!\nSelecione um campo!");  
    }
}

function salvarPaciente() {
    if (inputTextSelecionado != null) {    
        var inputText = inputTextSelecionado;    
        var paciente = document.getElementById(inputText).value;
        // alert("paciente: " + paciente + " (" + inputText + ")");
        var setLsPaciente = inputText;
        localStorage.setItem(setLsPaciente, paciente);
        var getLsPaciente = localStorage.getItem(setLsPaciente)
        alert("Paciente salvo!\ngetLsPaciente (" + inputText + "): " + getLsPaciente);
    } else {
        alert("ATENÇÃO!\nSelecione um campo!");  
    }    
}

function atualizaAgenda() {    
    var setLsPaciente0 = "text-seg0";
    var setLsPaciente1 = "text-seg1";
    var setLsPaciente2 = "text-seg2";
    var setLsPaciente3 = "text-seg3";
    var setLsPaciente4 = "text-seg4";
    var setLsPaciente5 = "text-seg5";
    var setLsPaciente6 = "text-seg6";
    var setLsPaciente7 = "text-seg7";
    var setLsPaciente8 = "text-seg8";    
    
    var setLsPaciente9 = "text-ter0";
    var setLsPaciente10 = "text-ter1";
    var setLsPaciente11 = "text-ter2";
    var setLsPaciente12 = "text-ter3";
    var setLsPaciente13 = "text-ter4";
    var setLsPaciente14 = "text-ter5";
    var setLsPaciente15 = "text-ter6";
    var setLsPaciente16 = "text-ter7";
    var setLsPaciente17 = "text-ter8";
    
    var setLsPaciente18 = "text-qua0";
    var setLsPaciente19 = "text-qua1";
    var setLsPaciente20 = "text-qua2";
    var setLsPaciente21 = "text-qua3";
    var setLsPaciente22 = "text-qua4";
    var setLsPaciente23 = "text-qua5";
    var setLsPaciente24 = "text-qua6";
    var setLsPaciente25 = "text-qua7";
    var setLsPaciente26 = "text-qua8";
    
    var setLsPaciente27 = "text-qui0";
    var setLsPaciente28 = "text-qui1";
    var setLsPaciente29 = "text-qui2";
    var setLsPaciente30 = "text-qui3";
    var setLsPaciente31 = "text-qui4";
    var setLsPaciente32 = "text-qui5";
    var setLsPaciente33 = "text-qui6";
    var setLsPaciente34 = "text-qui7";
    var setLsPaciente35 = "text-qui8";
    
    var setLsPaciente36 = "text-sex0";
    var setLsPaciente37 = "text-sex1";
    var setLsPaciente38 = "text-sex2";
    var setLsPaciente39 = "text-sex3";
    var setLsPaciente40 = "text-sex4";    
    var setLsPaciente41 = "text-sex5";
    var setLsPaciente42 = "text-sex6";
    var setLsPaciente43 = "text-sex7";
    var setLsPaciente44 = "text-sex8";
    
    
    var setLsCorInputText0 = "cor-seg0";
    var setLsCorInputText1 = "cor-seg1";
    var setLsCorInputText2 = "cor-seg2";
    var setLsCorInputText3 = "cor-seg3";
    var setLsCorInputText4 = "cor-seg4";
    var setLsCorInputText5 = "cor-seg5";
    var setLsCorInputText6 = "cor-seg6";
    var setLsCorInputText7 = "cor-seg7";
    var setLsCorInputText8 = "cor-seg8";
    
    var setLsCorInputText9 = "cor-ter0";
    var setLsCorInputText10 = "cor-ter1";
    var setLsCorInputText11 = "cor-ter2";
    var setLsCorInputText12 = "cor-ter3";
    var setLsCorInputText13 = "cor-ter4";
    var setLsCorInputText14 = "cor-ter5";
    var setLsCorInputText15 = "cor-ter6";
    var setLsCorInputText16 = "cor-ter7";
    var setLsCorInputText17 = "cor-ter8";
    
    var setLsCorInputText18 = "cor-qua0";
    var setLsCorInputText19 = "cor-qua1";
    var setLsCorInputText20 = "cor-qua2";
    var setLsCorInputText21 = "cor-qua3";
    var setLsCorInputText22 = "cor-qua4";
    var setLsCorInputText23 = "cor-qua5";
    var setLsCorInputText24 = "cor-qua6";
    var setLsCorInputText25 = "cor-qua7";
    var setLsCorInputText26 = "cor-qua8";
    
    var setLsCorInputText27 = "cor-qui0";
    var setLsCorInputText28 = "cor-qui1";
    var setLsCorInputText29 = "cor-qui2";
    var setLsCorInputText30 = "cor-qui3";
    var setLsCorInputText31 = "cor-qui4";
    var setLsCorInputText32 = "cor-qui5";
    var setLsCorInputText33 = "cor-qui6";
    var setLsCorInputText34 = "cor-qui7";
    var setLsCorInputText35 = "cor-qui8";
    
    var setLsCorInputText36 = "cor-sex0";
    var setLsCorInputText37 = "cor-sex1";
    var setLsCorInputText38 = "cor-sex2";
    var setLsCorInputText39 = "cor-sex3";
    var setLsCorInputText40 = "cor-sex4";
    var setLsCorInputText41 = "cor-sex5";
    var setLsCorInputText42 = "cor-sex6";
    var setLsCorInputText43 = "cor-sex7";
    var setLsCorInputText44 = "cor-sex8";    

    var getLsPaciente0 = localStorage.getItem(setLsPaciente0);
    var getLsPaciente1 = localStorage.getItem(setLsPaciente1);
    var getLsPaciente2 = localStorage.getItem(setLsPaciente2);
    var getLsPaciente3 = localStorage.getItem(setLsPaciente3);
    var getLsPaciente4 = localStorage.getItem(setLsPaciente4);
    var getLsPaciente5 = localStorage.getItem(setLsPaciente5);    
    var getLsPaciente6 = localStorage.getItem(setLsPaciente6);
    var getLsPaciente7 = localStorage.getItem(setLsPaciente7);
    var getLsPaciente8 = localStorage.getItem(setLsPaciente8);
    var getLsPaciente9 = localStorage.getItem(setLsPaciente9);
    var getLsPaciente10 = localStorage.getItem(setLsPaciente10);
    var getLsPaciente11 = localStorage.getItem(setLsPaciente11);
    var getLsPaciente12 = localStorage.getItem(setLsPaciente12);
    var getLsPaciente13 = localStorage.getItem(setLsPaciente13);
    var getLsPaciente14 = localStorage.getItem(setLsPaciente14);
    var getLsPaciente15 = localStorage.getItem(setLsPaciente15);
    var getLsPaciente16 = localStorage.getItem(setLsPaciente16);
    var getLsPaciente17 = localStorage.getItem(setLsPaciente17);
    var getLsPaciente18 = localStorage.getItem(setLsPaciente18);
    var getLsPaciente19 = localStorage.getItem(setLsPaciente19);
    var getLsPaciente20 = localStorage.getItem(setLsPaciente20);
    var getLsPaciente21 = localStorage.getItem(setLsPaciente21);
    var getLsPaciente22 = localStorage.getItem(setLsPaciente22);
    var getLsPaciente23 = localStorage.getItem(setLsPaciente23);
    var getLsPaciente24 = localStorage.getItem(setLsPaciente24);
    var getLsPaciente25 = localStorage.getItem(setLsPaciente25);
    var getLsPaciente26 = localStorage.getItem(setLsPaciente26);
    var getLsPaciente27 = localStorage.getItem(setLsPaciente27);
    var getLsPaciente28 = localStorage.getItem(setLsPaciente28);
    var getLsPaciente29 = localStorage.getItem(setLsPaciente29);
    var getLsPaciente30 = localStorage.getItem(setLsPaciente30);
    var getLsPaciente31 = localStorage.getItem(setLsPaciente31);
    var getLsPaciente32 = localStorage.getItem(setLsPaciente32);
    var getLsPaciente33 = localStorage.getItem(setLsPaciente33);
    var getLsPaciente34 = localStorage.getItem(setLsPaciente34);
    var getLsPaciente35 = localStorage.getItem(setLsPaciente35);
    var getLsPaciente36 = localStorage.getItem(setLsPaciente36);
    var getLsPaciente37 = localStorage.getItem(setLsPaciente37);
    var getLsPaciente38 = localStorage.getItem(setLsPaciente38);
    var getLsPaciente39 = localStorage.getItem(setLsPaciente39);
    var getLsPaciente40 = localStorage.getItem(setLsPaciente40);
    var getLsPaciente41 = localStorage.getItem(setLsPaciente41);
    var getLsPaciente42 = localStorage.getItem(setLsPaciente42);
    var getLsPaciente43 = localStorage.getItem(setLsPaciente43);
    var getLsPaciente44 = localStorage.getItem(setLsPaciente44);

    var getLsCorInputText0 = localStorage.getItem(setLsCorInputText0);
    var getLsCorInputText1 = localStorage.getItem(setLsCorInputText1);
    var getLsCorInputText2 = localStorage.getItem(setLsCorInputText2);
    var getLsCorInputText3 = localStorage.getItem(setLsCorInputText3);    
    var getLsCorInputText4 = localStorage.getItem(setLsCorInputText4);
    var getLsCorInputText5 = localStorage.getItem(setLsCorInputText5);    
    var getLsCorInputText6 = localStorage.getItem(setLsCorInputText6);
    var getLsCorInputText7 = localStorage.getItem(setLsCorInputText7);
    var getLsCorInputText8 = localStorage.getItem(setLsCorInputText8);
    var getLsCorInputText9 = localStorage.getItem(setLsCorInputText9);
    var getLsCorInputText10 = localStorage.getItem(setLsCorInputText10);
    var getLsCorInputText11 = localStorage.getItem(setLsCorInputText11);
    var getLsCorInputText12 = localStorage.getItem(setLsCorInputText12);
    var getLsCorInputText13 = localStorage.getItem(setLsCorInputText13);
    var getLsCorInputText14 = localStorage.getItem(setLsCorInputText14);
    var getLsCorInputText15 = localStorage.getItem(setLsCorInputText15);
    var getLsCorInputText16 = localStorage.getItem(setLsCorInputText16);
    var getLsCorInputText17 = localStorage.getItem(setLsCorInputText17);
    var getLsCorInputText18 = localStorage.getItem(setLsCorInputText18);
    var getLsCorInputText19 = localStorage.getItem(setLsCorInputText19);
    var getLsCorInputText20 = localStorage.getItem(setLsCorInputText20);
    var getLsCorInputText21 = localStorage.getItem(setLsCorInputText21);
    var getLsCorInputText22 = localStorage.getItem(setLsCorInputText22);
    var getLsCorInputText23 = localStorage.getItem(setLsCorInputText23);
    var getLsCorInputText24 = localStorage.getItem(setLsCorInputText24);
    var getLsCorInputText25 = localStorage.getItem(setLsCorInputText25);
    var getLsCorInputText26 = localStorage.getItem(setLsCorInputText26);
    var getLsCorInputText27 = localStorage.getItem(setLsCorInputText27);
    var getLsCorInputText28 = localStorage.getItem(setLsCorInputText28);
    var getLsCorInputText29 = localStorage.getItem(setLsCorInputText29);
    var getLsCorInputText30 = localStorage.getItem(setLsCorInputText30);
    var getLsCorInputText31 = localStorage.getItem(setLsCorInputText31);
    var getLsCorInputText32 = localStorage.getItem(setLsCorInputText32);
    var getLsCorInputText33 = localStorage.getItem(setLsCorInputText33);
    var getLsCorInputText34 = localStorage.getItem(setLsCorInputText34);
    var getLsCorInputText35 = localStorage.getItem(setLsCorInputText35);
    var getLsCorInputText36 = localStorage.getItem(setLsCorInputText36);
    var getLsCorInputText37 = localStorage.getItem(setLsCorInputText37);
    var getLsCorInputText38 = localStorage.getItem(setLsCorInputText38);
    var getLsCorInputText39 = localStorage.getItem(setLsCorInputText39);
    var getLsCorInputText40 = localStorage.getItem(setLsCorInputText40);
    var getLsCorInputText41 = localStorage.getItem(setLsCorInputText41);
    var getLsCorInputText42 = localStorage.getItem(setLsCorInputText42);
    var getLsCorInputText43 = localStorage.getItem(setLsCorInputText43);
    var getLsCorInputText44 = localStorage.getItem(setLsCorInputText44);

    
    // alert("getLsPaciente (" + setLsPaciente + "): " + getLsPaciente);   

    document.getElementById(setLsPaciente0).value = getLsPaciente0;
    document.getElementById(setLsPaciente1).value = getLsPaciente1;
    document.getElementById(setLsPaciente2).value = getLsPaciente2;
    document.getElementById(setLsPaciente3).value = getLsPaciente3;
    document.getElementById(setLsPaciente4).value = getLsPaciente4;
    document.getElementById(setLsPaciente5).value = getLsPaciente5;
    document.getElementById(setLsPaciente6).value = getLsPaciente6;
    document.getElementById(setLsPaciente7).value = getLsPaciente7;
    document.getElementById(setLsPaciente8).value = getLsPaciente8;
    document.getElementById(setLsPaciente9).value = getLsPaciente9;
    document.getElementById(setLsPaciente10).value = getLsPaciente10;
    document.getElementById(setLsPaciente11).value = getLsPaciente11;
    document.getElementById(setLsPaciente12).value = getLsPaciente12;
    document.getElementById(setLsPaciente13).value = getLsPaciente13;
    document.getElementById(setLsPaciente14).value = getLsPaciente14;
    document.getElementById(setLsPaciente15).value = getLsPaciente15;
    document.getElementById(setLsPaciente16).value = getLsPaciente16;
    document.getElementById(setLsPaciente17).value = getLsPaciente17;
    document.getElementById(setLsPaciente18).value = getLsPaciente18;
    document.getElementById(setLsPaciente19).value = getLsPaciente19;
    document.getElementById(setLsPaciente20).value = getLsPaciente20;
    document.getElementById(setLsPaciente21).value = getLsPaciente21;
    document.getElementById(setLsPaciente22).value = getLsPaciente22;
    document.getElementById(setLsPaciente23).value = getLsPaciente23;
    document.getElementById(setLsPaciente24).value = getLsPaciente24;
    document.getElementById(setLsPaciente25).value = getLsPaciente25;
    document.getElementById(setLsPaciente26).value = getLsPaciente26;
    document.getElementById(setLsPaciente27).value = getLsPaciente27;
    document.getElementById(setLsPaciente28).value = getLsPaciente28;
    document.getElementById(setLsPaciente29).value = getLsPaciente29;
    document.getElementById(setLsPaciente30).value = getLsPaciente30;
    document.getElementById(setLsPaciente31).value = getLsPaciente31;
    document.getElementById(setLsPaciente32).value = getLsPaciente32;
    document.getElementById(setLsPaciente33).value = getLsPaciente33;
    document.getElementById(setLsPaciente34).value = getLsPaciente34;
    document.getElementById(setLsPaciente35).value = getLsPaciente35;
    document.getElementById(setLsPaciente36).value = getLsPaciente36;
    document.getElementById(setLsPaciente37).value = getLsPaciente37;
    document.getElementById(setLsPaciente38).value = getLsPaciente38;
    document.getElementById(setLsPaciente39).value = getLsPaciente39;
    document.getElementById(setLsPaciente40).value = getLsPaciente40;
    document.getElementById(setLsPaciente41).value = getLsPaciente41;
    document.getElementById(setLsPaciente42).value = getLsPaciente42;
    document.getElementById(setLsPaciente43).value = getLsPaciente43;
    document.getElementById(setLsPaciente44).value = getLsPaciente44;
    
    
    document.getElementById(setLsPaciente0).style.backgroundColor = getLsCorInputText0;
    document.getElementById(setLsPaciente1).style.backgroundColor = getLsCorInputText1;
    document.getElementById(setLsPaciente2).style.backgroundColor = getLsCorInputText2;
    document.getElementById(setLsPaciente3).style.backgroundColor = getLsCorInputText3;
    document.getElementById(setLsPaciente4).style.backgroundColor = getLsCorInputText4;
    document.getElementById(setLsPaciente5).style.backgroundColor = getLsCorInputText5;
    document.getElementById(setLsPaciente6).style.backgroundColor = getLsCorInputText6;
    document.getElementById(setLsPaciente7).style.backgroundColor = getLsCorInputText7;
    document.getElementById(setLsPaciente8).style.backgroundColor = getLsCorInputText8;
    document.getElementById(setLsPaciente9).style.backgroundColor = getLsCorInputText9;
    document.getElementById(setLsPaciente10).style.backgroundColor = getLsCorInputText10;
    document.getElementById(setLsPaciente11).style.backgroundColor = getLsCorInputText11;
    document.getElementById(setLsPaciente12).style.backgroundColor = getLsCorInputText12;
    document.getElementById(setLsPaciente13).style.backgroundColor = getLsCorInputText13;
    document.getElementById(setLsPaciente14).style.backgroundColor = getLsCorInputText14;
    document.getElementById(setLsPaciente15).style.backgroundColor = getLsCorInputText15;
    document.getElementById(setLsPaciente16).style.backgroundColor = getLsCorInputText16;
    document.getElementById(setLsPaciente17).style.backgroundColor = getLsCorInputText17;
    document.getElementById(setLsPaciente18).style.backgroundColor = getLsCorInputText18;
    document.getElementById(setLsPaciente19).style.backgroundColor = getLsCorInputText19;    
    document.getElementById(setLsPaciente20).style.backgroundColor = getLsCorInputText20;
    document.getElementById(setLsPaciente21).style.backgroundColor = getLsCorInputText21;
    document.getElementById(setLsPaciente22).style.backgroundColor = getLsCorInputText22;
    document.getElementById(setLsPaciente23).style.backgroundColor = getLsCorInputText23;
    document.getElementById(setLsPaciente24).style.backgroundColor = getLsCorInputText24;
    document.getElementById(setLsPaciente25).style.backgroundColor = getLsCorInputText25;
    document.getElementById(setLsPaciente26).style.backgroundColor = getLsCorInputText26;
    document.getElementById(setLsPaciente27).style.backgroundColor = getLsCorInputText27;
    document.getElementById(setLsPaciente28).style.backgroundColor = getLsCorInputText28;
    document.getElementById(setLsPaciente29).style.backgroundColor = getLsCorInputText29;
    document.getElementById(setLsPaciente30).style.backgroundColor = getLsCorInputText30;
    document.getElementById(setLsPaciente31).style.backgroundColor = getLsCorInputText31;
    document.getElementById(setLsPaciente32).style.backgroundColor = getLsCorInputText32;
    document.getElementById(setLsPaciente33).style.backgroundColor = getLsCorInputText33;
    document.getElementById(setLsPaciente34).style.backgroundColor = getLsCorInputText34;
    document.getElementById(setLsPaciente35).style.backgroundColor = getLsCorInputText35;
    document.getElementById(setLsPaciente36).style.backgroundColor = getLsCorInputText36;
    document.getElementById(setLsPaciente37).style.backgroundColor = getLsCorInputText37;
    document.getElementById(setLsPaciente38).style.backgroundColor = getLsCorInputText38;
    document.getElementById(setLsPaciente39).style.backgroundColor = getLsCorInputText39;
    document.getElementById(setLsPaciente40).style.backgroundColor = getLsCorInputText40;
    document.getElementById(setLsPaciente41).style.backgroundColor = getLsCorInputText41;
    document.getElementById(setLsPaciente42).style.backgroundColor = getLsCorInputText42;
    document.getElementById(setLsPaciente43).style.backgroundColor = getLsCorInputText43;
    document.getElementById(setLsPaciente44).style.backgroundColor = getLsCorInputText44;
}