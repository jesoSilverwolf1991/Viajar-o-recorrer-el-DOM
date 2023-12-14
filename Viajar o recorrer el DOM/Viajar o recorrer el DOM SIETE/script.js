function searchAndHighlight() {
    var searchText = document.getElementById('searchInput').value;
    var content = document.getElementById('content');
    var regex = new RegExp(searchText, 'gi');
  
    var matches = content.innerHTML.match(regex);
  
    if (matches) {
      content.innerHTML = content.innerHTML.replace(regex, '<span class="highlight">' + matches[0] + '</span>');
    } else {
      content.innerHTML = content.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
    }
  }
  