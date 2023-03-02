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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 16a1 1 0 0 1-.446-.105l-2-1a1 1 0 0 1 .894-1.79l2 1A1 1 0 0 1 23 16zm-1.553-9.1 2-1a1 1 0 1 0-.894-1.79l-2 1a1 1 0 0 0 .894 1.79zM24 10a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm-6 9V1a1 1 0 0 0-2 0c0 2.949-2.583 4-5 4H4a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h7c2.417 0 5 1.051 5 4a1 1 0 0 0 2 0zm-9.814-2H4a6 6 0 0 1-1.382-.167l2.5 5.582A2.671 2.671 0 0 0 7.558 24 2.462 2.462 0 0 0 9.8 20.528z"/></svg>
  