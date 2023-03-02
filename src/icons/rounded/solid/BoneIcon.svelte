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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.5 24c-.93 0-1.83-.28-2.6-.83a4.456 4.456 0 0 1-1.7-2.37c-.95-.29-1.79-.89-2.37-1.7a4.5 4.5 0 0 1-.73-3.55c.36-1.75 1.79-3.15 3.56-3.48 1.16-.21 2.33.02 3.3.65l5.81-5.74c-.67-1-.9-2.18-.69-3.34.32-1.77 1.72-3.2 3.48-3.56 1.25-.26 2.52 0 3.55.73.82.58 1.42 1.42 1.7 2.37.95.29 1.79.89 2.37 1.7a4.5 4.5 0 0 1 .73 3.55c-.36 1.75-1.79 3.15-3.56 3.48-1.16.21-2.33-.02-3.3-.65L11.24 17c.67 1 .9 2.18.69 3.34a4.477 4.477 0 0 1-3.48 3.56c-.32.07-.64.1-.95.1Z"/></svg>
  