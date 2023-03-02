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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.5 14H20v3a1 1 0 1 1-2 0v-3h-2v3a1 1 0 1 1-2 0v-3h-2v3a1 1 0 1 1-2 0v-3H7a1 1 0 1 1 0-2h3v-2H7a1 1 0 1 1 0-2h3V6H7a1 1 0 1 1 0-2h3v-.5A3.5 3.5 0 0 0 6.5 0h-3A3.5 3.5 0 0 0 0 3.5V19a5 5 0 0 0 5 5h15.5a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5Z"/></svg>
  