var search_button = document.getElementById('searchbtn')
search_button.onclick = saveData;

function saveData(){
  var input = document.getElementById("searchbox");
  localStorage.setItem("search", input.value);
  var storedValue = localStorage.getItem("search");
}