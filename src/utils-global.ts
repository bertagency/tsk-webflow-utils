// Get URL for Form Element
(function getURL() {
  const input = document.getElementById('url');
  const url = window.location.href;
  input.value = url;
})();
