	function validate(){

						var mail = document.forms['formsign']['mail'];
						var password = document.forms['formsign']['password'];
						var password2 = document.forms['formsign']['password2'];

						var error = document.getElementById('Error');
						var errorpass = document.getElementById('Errorpass');
						var errorpass2 = document.getElementById('Errorpass2'); 

						mail.addEventListner('textInput', mail_Verify);
						password.addEventListner('textInput', password_Verify);
						password2.addEventListner('textInput',password2_Verify);

						
						if(mail < 9){
								error.style.display = "block";
								alert('nafr mo sha3al');
								mail.focus();
								return false; }
						

						if(password == 6){
								errorpass.style.display = "block";
								alert('nafr mo sha3al');
								mail.focus();
								return false; }
							

						if(password2 != password){
								alert('nafr mo sha3al');
								errorpass2.style.display = "block";
								mail.focus();
								return false; }
						}



								
