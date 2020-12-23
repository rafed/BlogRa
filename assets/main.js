
// Google search engine function
function executeQuery(viewport) {
  if(viewport=="lg"){
    var input = document.getElementById('cse-search-input-box-id');
  }
  else if(viewport=="xs"){
    var input = document.getElementById('cse-search-input-box-id2');
  }

  var element = google.search.cse.element.getElement('searchresults-only0');
  if (input.value == '') {
    element.clearAllResults();
  } else {
    element.execute(input.value);
  }
  return false;
}

// Social media share
function socialMediaPopUp(url, title, width, height) {
  var left = (screen.width / 2) - (width / 2);
  var top = (screen.height / 2) - (height / 2);
  window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
}
