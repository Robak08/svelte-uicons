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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 11H8a2 2 0 0 0-2 2v11h12V13a2 2 0 0 0-2-2Zm-3 11h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM24 9.724V19a5.009 5.009 0 0 1-4 4.9V13a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v10.9A5.009 5.009 0 0 1 0 19V9.724a4.992 4.992 0 0 1 2.2-4.145l7-4.724a4.981 4.981 0 0 1 5.594 0l7 4.724A4.993 4.993 0 0 1 24 9.724Z"/></svg>
  