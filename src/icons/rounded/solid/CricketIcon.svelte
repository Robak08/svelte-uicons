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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.707 4.707a1 1 0 0 1-1.414 0l-.793-.793L17.311 8.1a2.686 2.686 0 0 0-.811 1.88 2.526 2.526 0 0 0 .221 1.02 3.072 3.072 0 0 1-.357 3.178l-.982-.982A4.2 4.2 0 0 0 12.424 12a1.444 1.444 0 0 1-.379-.031.642.642 0 0 1-.045-.3 4.218 4.218 0 0 0-1.194-3.056l-.981-.98A3.057 3.057 0 0 1 13 7.276a2.437 2.437 0 0 0 1.05.224 2.687 2.687 0 0 0 1.85-.811L20.086 2.5l-.793-.793A1 1 0 0 1 20.707.293l3 3a1 1 0 0 1 0 1.414Zm-9.738 9.9A2.2 2.2 0 0 0 12.413 14 2.166 2.166 0 0 1 10 11.673a2.288 2.288 0 0 0-.609-1.642L8.4 9.038l-7.483 7.48a3 3 0 0 0-.853 1.711 5.054 5.054 0 0 0 1.3 4.405A4.841 4.841 0 0 0 4.869 24a6.4 6.4 0 0 0 .9-.064 2.985 2.985 0 0 0 1.71-.852l7.484-7.484ZM24 20.5a3.5 3.5 0 1 0-3.5 3.5 3.5 3.5 0 0 0 3.5-3.5Z"/></svg>
  