function validate()
        {
            var contactno = document.getElementById("contact").value;
            var submit_button = document.getElementById("b1");
            var request = new XMLHttpRequest();
            request.open("POST","http://127.0.0.1:8000/validate/",true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.send("cno="+contactno);
            request.onreadystatechange = show;

            function show()
            {
                if(request.readyState == 4)
                {
                  var res_text = request.responseText;
                  // converting text(string) to json
                  var json_data = JSON.parse(res_text);

                  if(json_data.result)
                  {
                     document.getElementById("s_contact").innerText = "Contact no already exist";
                     submit_button.disabled = true
                  }
                  else {
                      document.getElementById("s_contact").innerText = "";
                     submit_button.disabled = false
                  }

                }
            }
        }
        function validate_mail()
        {
            var emailid = document.getElementById("mail").value;
            var submit_button = document.getElementById("b1");
            var request = new XMLHttpRequest();
            request.open("POST","http://127.0.0.1:8000/validate_mail/",true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.send("mailid="+emailid);
            request.onreadystatechange = show;

            function show()
            {
                if(request.readyState == 4)
                {
                  var res_text = request.responseText;
                  // converting text(string) to json
                  var json_data = JSON.parse(res_text);

                  if(json_data.result)
                  {
                     document.getElementById("s_email").innerText = "Email already exist";
                     submit_button.disabled = true
                  }
                  else {
                      document.getElementById("s_email").innerText = "";
                     submit_button.disabled = false
                  }

                }
            }
        }







