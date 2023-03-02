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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 20a1 1 0 0 1-1 1H8v2a1 1 0 0 1-2 0v-2H4a1 1 0 0 1 0-2h2v-4.151A7.5 7.5 0 1 1 10.124.478a9.454 9.454 0 0 0 0 14.044A7.521 7.521 0 0 1 8 14.977V19h2a1 1 0 0 1 1 1ZM24 7.5a7.5 7.5 0 1 0-8 7.475V19h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-4.151A7.513 7.513 0 0 0 24 7.5Z"/></svg>
  