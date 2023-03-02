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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 15h4v2h-4Zm10-2.292V19a5.006 5.006 0 0 1-5 5H9a5.006 5.006 0 0 1-5-5v-6.292a4.976 4.976 0 0 1 3.144-4.643L9 7.323V2a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2v5.323l1.856.742A4.977 4.977 0 0 1 20 12.708ZM16 14a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1Z"/></svg>
  