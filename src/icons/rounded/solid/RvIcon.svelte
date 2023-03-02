<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 7v2H4V7Zm8 3v2h7.5a6.866 6.866 0 0 0-.419-.879L21.3 8H18a2 2 0 0 0-2 2Zm0 4v5h7a1 1 0 0 0 1-1v-3.407c0-.2-.022-.4-.039-.593Zm-2 5H4a1 1 0 0 1-.707-.293L2.05 17.464A6.954 6.954 0 0 1 0 12.515V6a5.006 5.006 0 0 1 5-5h16a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1h-5a4 4 0 0 0-4 4ZM10 9V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2ZM4.058 21c-.587 3.954 5.472 3.952 4.884 0Zm12 0c-.587 3.954 5.472 3.952 4.884 0Z"/></svg>
  