	var logon = document.getElementById("logon");
	var login = document.getElementById("login");
	var error = document.getElementById("error");
	var userLogin = document.getElementById("btnLogin")
	var btnCrateUser = document.getElementById("btnCreateUser");
	var divLoginControls = document.getElementById("divLoginControls");
	var mainDiv = document.getElementById("main");
	var divlogin = document.getElementById("divlogin");
	var btnAccountDetails = document.getElementById("btnAccountDetails");
	var btnLogout = document.getElementById("btnLogout");
	var divToDoList = document.getElementById('divToDoList');
	let divUserDetails = document.getElementById("divUserDetails");
	var divListItems = document.getElementById('divListItems')

	var parsedUser;
	logon.addEventListener("click",showLogon);
	login.addEventListener("click",showLogin);
	btnLogout.addEventListener("click", Logout);
	btnCrateUser.addEventListener("click", createUser);
	btnAccountDetails.addEventListener("click", editUserDetails);

	function User(uname, password, fName, lName){
		this.uname = uname;
		this.password = password;
		this.fName = fName;
		this.lName = lName;
		this.toDoList = [];
	}
	

	function ToDoList(name, date){
		this.name = name;
		this.date = date;
		this.item = [];
	}

	function Item(name, isDone){
		this.name = name;
		this.isDone = isDone
	}

	function Logout(e){
		divlogin.style.display = 'block';
		parsedUser = null;
		document.getElementById("inUserName").value = "";
		document.getElementById("inPwd").value = "";
		divUserDetails.style.display = 'none';
		divToDoList.style.display = 'none';
		divLoginControls.style.display = 'none';
		divListItems.style.display = 'none';
	}



	userLogin.addEventListener("click", (e) =>{
		let errorMsg = "";
		let userName = document.getElementById("inUserName");
		let pwd = document.getElementById("inPwd");

		if(userName.value === "" || pwd.value === "")
		{
			alert('Password or user name cannot be empty');
		}

		let storedUser = localStorage.getItem(userName.value);
		
		if(storedUser === 'null')
		{
			displayError("There is no user with this name");
		}
		else{
			parsedUser = JSON.parse(storedUser);
			if(parsedUser.password !== pwd.value)
			{
				errorMsg = "The password is not valid";
			}
			else{ 
				divlogin.style.display = "none";
				divLoginControls.style.display = 'block';
				divToDoList.style.display = 'block';				
				DisplayToDoList();
				document.getElementById("lblUser").innerHTML = parsedUser.fName + ',' + parsedUser.lName;				
			}
		} 
	});

	function showLogon(){ 
		mainDiv.style.display = 'none';
		
		divUserDetails.style.display = "block";
		document.getElementById("uName").value = "";
		document.getElementById("pwd").value = "";
		document.getElementById("txtFName").value = "";
		document.getElementById("txtLName").value = "";
	};

	function showLogin(){ 
		mainDiv.style.display = 'none';
		divlogin.style.display = "block";
	};

	function createUser(e){ 
		let chk = document.getElementById("chkTerms");
		let uName = document.getElementById("uName");
		let pwd = document.getElementById("pwd");
		let fName = document.getElementById("txtFName").value;
		let lName = document.getElementById("txtLName").value;
		let errorMsg = "";

		if(e.srcElement.innerHTML === "Update user"){
			parsedUser.pwd = pwd;
			parsedUser.fName = fName;
			parsedUser.lName = lName;
			localStorage.setItem(parsedUser.uname, JSON.stringify(parsedUser));
			alert('User is Updated');
			divToDoList.style.display = 'block';
			divUserDetails.style.display = 'none';
			document.getElementById("lblUser").innerHTML = parsedUser.fName + ',' + parsedUser.lName;	
		}
		else{

			if(chk.checked){
				if(uName.value === "" || pwd.value === "")
				{
					errorMsg = "UserName or password cannot be empty";
				}
			}
			else{
				errorMsg = errorMsg + "Kindly agree to terms of use";
			}
			if(errorMsg !== "")
			{
				displayError(errorMsg);
			}
			else{
				if(localStorage.getItem(uName.value) !== null)
				{ 
					displayError("The user already exists");
				}
				else{
					var user = new User(uName.value, pwd.value, fName, lName);
					localStorage.setItem(uName.value, JSON.stringify(user));
					alert('user created successfully');
					document.getElementById("main").style.display = 'block';
					divUserDetails.style.display = 'none';
				}
			} 
		}
	};

	function displayError(error)
	{
		document.getElementById("error").style.display = 'block';
		document.getElementById("error").innerHTML = error;
	};

	function editUserDetails(){ 
		divUserDetails.style.display = 'block';
		divToDoList.style.display = 'none';
		divListItems.style.display = 'none';
		document.getElementById("chkTerms").style.display = 'none'; 
		document.getElementById("forchkTerms").style.display = 'none';
		document.getElementById("btnCreateUser").innerHTML = 'Update user';
		document.getElementById("pwd").value  = parsedUser.password;
		document.getElementById("uName").value  = parsedUser.uname;
		document.getElementById("txtFName").value = parsedUser.fName;
		document.getElementById("txtLName").value = parsedUser.lName;

		let chk = document.getElementById("chkTerms");
		let uName = document.getElementById("uName");
		uName.setAttribute('disabled', true);
		

		localStorage.setItem(parsedUser.uname, JSON.stringify(parsedUser));
	};

	var btnCreateToDoList = document.getElementById("btnCreateToDoList");
	btnCreateToDoList.addEventListener("click", (e) => {
		divToDoList.style.display = 'none';
		divListItems.style.display = 'block';	
		document.getElementById("olListItems").innerHTML = "";	
		document.getElementById("txtListName").value = "";
	});

	var btnAddItem = document.getElementById('btnAddItem');
	btnAddItem.addEventListener("click", (e) =>{ 
		AddNewItemToList();
	});

	function AddNewItemToList(){
		var olListItems = document.getElementById("olListItems");

		var li = document.createElement("li");

		var textBox = document.createElement("input");
		textBox.setAttribute('type', 'text');
		textBox.setAttribute('id', 'txtNewItem');
		li.appendChild(textBox);

		olListItems.appendChild(li);

	}

	var btnSaveList = document.getElementById("btnSaveList");
	btnSaveList.addEventListener('click', (e) => {
		if(document.getElementById('txtListName').value === "")
		{
			alert('Please enter List Name');
		}
		else
		{
			var olListItems = document.getElementById("olListItems");		
			var isItemPresent = false;	
			var isListFound = false;
			for(var item of olListItems.querySelectorAll('li'))
			{
				isItemPresent = false;
				if(parsedUser.toDoList.length === 0){
					isListFound = true;
					CreateNewList(item);
				}
				else{
					for(var tdList of parsedUser.toDoList){				
						if(tdList.name.toLowerCase() === document.getElementById('txtListName').value.toLowerCase()){
							isListFound = true;
							for(var itm of tdList.item){														
								if(item.querySelector('#txtNewItem') !== null && itm.name !== 'undefined')
								{
									if(itm.name.toLowerCase() === item.querySelector('#txtNewItem').value.toLowerCase())
									{
										isItemPresent = true;
									}
								
								}
								else if(item.querySelector('#txtToDoItem') !== null &&
									item.querySelector('#cbIsDone') !== null &&
									itm.name.toLowerCase() === item.querySelector('#txtToDoItem').innerText.toLowerCase()){
									itm.isDone = item.querySelector('#cbIsDone').checked;
								}									
							}

							if(!isItemPresent && item.querySelector('#txtNewItem') !== null){
							tdList.item.push(new Item(item.querySelector('#txtNewItem').value, false));
							}	
						}
											
					}
				}

					if(!isListFound){
						CreateNewList(item);
				}
			}
		}
		
		localStorage.setItem(parsedUser.uname, JSON.stringify(parsedUser));
		alert('List is Saved');
		divListItems.style.display = 'none';
		divToDoList.style.display = 'block';
		DisplayToDoList();
	});

	function CreateNewList(item){
		parsedUser.toDoList.push(new ToDoList(document.getElementById('txtListName').value, new Date()));
		parsedUser.toDoList[parsedUser.toDoList.length - 1].item.push(new Item(item.querySelector('#txtNewItem').value, false));
	};

	function DisplayToDoList()
	{
		var olToDoList = document.getElementById("olToDoList");
		olToDoList.innerHTML = "";
		for(var toDoList of parsedUser.toDoList){

			var li = document.createElement("li");

			var lblToDoList = document.createElement("label");			
			lblToDoList.setAttribute('id', 'txtToDoItem');
			lblToDoList.innerHTML = toDoList.name;
			li.appendChild(lblToDoList);
			olToDoList.appendChild(li);
		}

		localStorage.setItem(parsedUser.uname, JSON.stringify(parsedUser));
	}

	
	var txtToDoItem = divToDoList.querySelector('ol');
	txtToDoItem.addEventListener('click', (e) =>{	

		divToDoList.style.display = 'none';
		divListItems.style.display = 'block';
		document.getElementById("olListItems").innerHTML = ""	
		document.getElementById("txtListName").value = e.srcElement.textContent;

		for(var toDoList of parsedUser.toDoList){
			if(toDoList.name === e.srcElement.textContent)
			{
				for(var listItem of toDoList.item){
					var olListItems = document.getElementById("olListItems");	
					
					var li = document.createElement("li");

					var div = document.createElement("div");

					var lblToDoList = document.createElement("label");			
					lblToDoList.setAttribute('id', 'txtToDoItem');
					lblToDoList.innerHTML = listItem.name;

					var chb = document.createElement('input');
					chb.setAttribute('type', 'checkbox');
					chb.setAttribute('id', 'cbIsDone');
					if(listItem.isDone){
						chb.setAttribute('checked', true);
					}

					div.appendChild(lblToDoList);
					div.appendChild(chb);



					li.appendChild(div);
					olListItems.appendChild(li);
				}
				break;
			}
		}

		
	});