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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 12v4h-4v-4h4Zm10-2.276V19c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V9.724C0 8.059.824 6.51 2.204 5.579L9.203.855a4.98 4.98 0 0 1 5.594 0L20 4.366V2a1 1 0 1 1 2 0v3.735c1.253.942 2 2.41 2 3.988ZM16 12c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4Z"/></svg>
  