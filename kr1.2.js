 var str = prompt("Введите строку со скобками");       
 var count = 0;

        for (var i = 0; i <= str.length; i++) {
            if (str[i] == "(") {
                count++;
            } else if(str[i] == ")") {
                count--;
            }
        }
        if(count == 0) {
            alert('true (скобки расставлены правильно)');
        } else {
            alert('false (скобки расставлены правильно)');
        }