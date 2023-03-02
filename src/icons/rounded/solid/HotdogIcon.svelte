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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 6a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm5-2V2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0Zm-8-.011V2a1 1 0 0 0-2 0v1.989a1 1 0 0 0 2 0Zm11.441 18.072c5.283-2.692 1.537-10.546-3.887-8.12A9.327 9.327 0 0 1 12 15a9.327 9.327 0 0 1-4.556-1.059c-5.419-2.426-9.174 5.427-3.887 8.12 4.358 2.539 12.527 2.539 16.884 0ZM.957 12.906a3.5 3.5 0 0 1 5.058-4.841c2.558 2.553 9.49 2.513 11.98-.014 3.423-3.284 8.322 1.858 4.812 5.083a6.507 6.507 0 0 0-7.117-1A7.388 7.388 0 0 1 12 13a7.4 7.4 0 0 1-3.693-.862 6.505 6.505 0 0 0-7.116 1 7.578 7.578 0 0 1-.234-.232Z"/></svg>
  