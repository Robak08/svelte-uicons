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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6.202 18a5.656 5.656 0 0 1-3.278-1.046L.849 15.478a2.023 2.023 0 0 1-.828-1.353 1.815 1.815 0 0 1 .361-1.396 1.915 1.915 0 0 1 2.169-.63l3.247 1.192L20.453 6.23a2.5 2.5 0 0 1 3.315 1.22 2.533 2.533 0 0 1-1.203 3.338L8.616 17.455A5.602 5.602 0 0 1 6.201 18ZM24 23a1 1 0 0 0-1-1H1a1 1 0 1 0 0 2h22a1 1 0 0 0 1-1ZM8.614 9.715l5.419-2.611-5.849-3.612a2.502 2.502 0 0 0-2.542-.26l-.781.367a1.495 1.495 0 0 0-.846 1.144 1.497 1.497 0 0 0 .49 1.337l4.108 3.636Z"/></svg>
  