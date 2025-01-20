let btn = document.getElementById('call');
let btn2 = document.getElementById('call2');


function apicall(customerNumber) {


	var xhr = new XMLHttpRequest();
	var currentDate = new Date();
	// Configure the request
	xhr.open('GET', 'insert.php?param=' + customerNumber, + "&param2=" + currentDate, true);
	// Define what happens on successful data submission
	xhr.onload = function () {
		// Check if the request was successful
		if (xhr.status >= 200 && xhr.status < 300) {
			// Handle the response from the PHP script
			console.log(xhr.responseText);
		} else {
			// Handle the error
			console.error('Request failed:', xhr.statusText);
		}
	};
	// Handle network errors
	xhr.onerror = function () {
		console.error('Request failed');
	};
	// Send the request
	xhr.send();


	const apiUrl = 'https://api.mishtel.net/C2CAPI/webresources/Click2CallPost';
	const data =
	{
		"sourcetype": "0",
		"customivr": true,
		"credittype": "2",
		"filetype": "2",
		"ukey": "nmGxvdV2d73FP8mveSsIvSmv2",
		"serviceno": "2454999",
		"ivrtemplateid": "386",
		"custcli": "2454999",
		"isrefno": true,
		"msisdnlist": [
			{
				"phoneno": "" + customerNumber,
				"agentno": "7042830296"
			}
		]
	};

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};


	fetch(apiUrl, requestOptions)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			console.log(data);
			alert(data.message);


		})
		.catch(error => {
			console.error;

			('Error:', error);

		});

}


function showalert(e) {
	e.preventDefault();

	let number = document.getElementById('phone').value;
	if (number.length < 9 || number == null || !(isNumeric(number))) {
		alert("Please Enter Valid Data");
		return;
	}
	//   let agent=document.getElementById('agent_phone').value;   
	apicall(number);
}
function showalert2(e) {
	e.preventDefault();

	let number = document.getElementById('phone2').value;
	if (number.length < 9 || number == null || !(isNumeric(number))) {
		alert("Please Enter Valid Data");
		return;
	}
	//   let agent=document.getElementById('agent_phone').value;   
	apicall(number);
}
function isNumeric(str) {
	// parseFloat() converts the string to a floating point number.
	// If the conversion fails, it returns NaN.
	// isNaN() checks if a value is NaN.
	return !isNaN(parseFloat(str)) && isFinite(str);
}
function sumitquery(ClientName, ClientPhone, ClientEmail, ClientMsg) {


	var xhr = new XMLHttpRequest();
	var currentDate = new Date();
	// Configure the request
	var data = {
		param1: ClientName,
		param2: ClientEmail,
		param3: ClientPhone,
		param4: ClientMsg
	};


	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'query.php', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function () {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			console.log(xhr.responseText);
		}
	};
	xhr.send(JSON.stringify(data));

	alert('successfull');

	var apiUrll = "https://api.mishtel.net/SMSAPI/webresources/CreateSMSCampaignGet?ukey=X9miJJdYhTHeMjbGA8ekTKYzG&msisdn=" + ClientPhone + "&language=0&credittype=2&senderid=MISHTL&templateid=374&message=This is test message for our new client.  MISHTL&filetype=2";

	fetch(apiUrll)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			console.log(data);
			alert(data.message);


		})
		.catch(error => {
			console.error;

			('Error:', error);

		});


}
function showalert3(e) {
	let ClientName = document.getElementById('ClientName').value;
	let ClientEmail = document.getElementById('ClientEmail').value;
	let ClientPhone = document.getElementById('ClientPhone').value;
	let ClientMsg = document.getElementById('ClientMsg').value;
	console.log(ClientEmail, ClientMsg, ClientPhone);
	sumitquery(ClientName, ClientPhone, ClientEmail, ClientMsg);
}
btn.addEventListener('click', showalert);
btn2.addEventListener('click', showalert2);









