<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="youdoors.corporate@gmail.com";  // e-mail админа 
 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://youdoors.ru/cooperation-post.html";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$email=$_POST['email']; 

$tell=$_POST['tell'];
 
$mess=$_POST['mess']; 
 
  
 
// Проверяем валидность e-mail 
 
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email))) 
 
 { 
 
  echo 
"<center>Вернитесь <a 
href='javascript:history.back(1)'><B>назад</B></a>. Вы 
указали неверные данные!"; 
 
  } 
 
 else 
 
 { 
 
 
$mess=" 
 Предложение о сотрудничестве от:
 Имя: $name
 Телефон: $tell
 E-mail: $email
 Сообщение: $mess
"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Предложение о сотрудничестве! YOUDOOR.RU Сообщение 
от $name", "$mess"); 
 
  
 
// Сохраняем в базу данных 
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time  Предложение о сотрудничестве! YOUDOOR.RU Сообщение от $name"); 
 
fwrite($f,"\n $mess "); 
 
fwrite($f,"\n ---------------"); 
 
fclose($f); 
 
  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 1); 
//--></script> 
 
$msg 
 
<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";  
exit; 
 
 } 
 
?>