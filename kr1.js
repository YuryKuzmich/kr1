 var num1, num2, option;
num1 = +prompt ("Введите первое число");
option = prompt ("Введите операцию (символ - + * /)");
num2 = +prompt ("Введите второе число");
var res;
switch (option) {
	case "+":
      res = num1 + num2;
	break;

	case "-":
      res = num1 - num2;
	break;

	case "*":
      res = num1 * num2;
	break;

	case "/":
      res = num1 / num2;
	break;
	default:
	  res = "Вы ввели неправильную команду";
}
    alert(res);