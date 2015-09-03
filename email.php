<?php 
$errors = '';
$emails = array(
	"j.mouette@gmail.com",
	"cbjr.thiago@gmail.com",
	"ouvidoria.bruno@gmail.com",
	"andre.rodriguesjesus@gmail.com"
);

$myemail = implode(',', $emails);

if(empty($_POST['nome'])  || 
   empty($_POST['email']) || 
   empty($_POST['mensagem']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$email_address = $_POST['email']; 
$message = $_POST['message']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Contato Bolo de Sal: $name";
	$email_body = "Você recebeu um contato. ".
	" Detalhes:\n Nome: $name \n Email: $email_address \n Mensagem: \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);

	echo "<script>alert('E-mail enviado com sucesso!');</script>";
	//redirect to the 'thank you' page
	header('Location: index.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Bolo de Sal</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
// Exibe o erro e volta para index
echo '<script>alert('.nl2br($errors).');</script>';
header('Location: index.html');
?>


</body>
</html>
