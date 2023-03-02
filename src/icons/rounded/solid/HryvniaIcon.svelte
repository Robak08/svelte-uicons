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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6.907 15H21c1.308-.005 1.307-1.995 0-2h-8.819l5.333-2H21c1.308-.005 1.307-1.995 0-2h-.889c1.69-2.35.851-6.026-1.716-7.355A13.32 13.32 0 0 0 12 0C6.647 0 3.428 3.158 3.293 3.293A1 1 0 0 0 4.706 4.71c2.09-2.169 8.101-4.074 12.725-1.314C19.636 4.53 19.43 8.089 17.113 9H3c-1.308.005-1.307 1.995 0 2h8.817l-5.333 2H3c-1.308.005-1.307 1.995 0 2h.93c-1.831 2.52-.806 6.437 2.023 7.746 5.801 2.971 13.349-.026 15.647-1.946 1.042-.789-.148-2.378-1.198-1.601-1.879 1.574-8.604 4.314-13.568 1.752-2.436-1.107-2.39-4.9.074-5.951Z"/></svg>
  