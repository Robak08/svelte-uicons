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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 13.276V5c0-2.757-2.243-5-5-5h-4C7.243 0 5 2.243 5 5v8.276c-1.742.621-3 2.271-3 4.224V23a1 1 0 1 0 2 0v-4h16v4a1 1 0 1 0 2 0v-5.5c0-1.953-1.258-3.602-3-4.224ZM17 5v8h-2V2.184c1.161.414 2 1.514 2 2.816Zm-6 8V2h2v11h-2ZM9 2.184V13H7V5c0-1.302.839-2.402 2-2.816Z"/></svg>
  