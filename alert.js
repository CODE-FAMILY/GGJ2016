function AlertFunction() 
{
    alert("Hello! I am an alert box!");
}

function redirect()
{
        window.location='file:///C:/Users/Roberto/Desktop/GGJ2016/Test2.html';
}

  $(document).ready(function()
  {
    alert('<%: TempData["Resultat"]%>');
  });
