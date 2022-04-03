
function checkForm(form) {

  if(!form.Terms_Conds.checked){
    alert("Please indicate that you accept the Terms and Conditions");
      form.Terms_Conds.focus();
      return false;
    }
    return true;
  }
