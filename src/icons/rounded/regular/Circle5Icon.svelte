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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm2.901 14.754a3.973 3.973 0 0 0 1.094-2.968C15.884 11.663 14.054 10 11.83 10H10V8h4a1 1 0 1 0 0-2h-4c-1.103 0-2 .897-2 2v3a1 1 0 0 0 1 1h2.83c1.141 0 2.112.849 2.167 1.891a1.985 1.985 0 0 1-.547 1.486A1.985 1.985 0 0 1 12 16H9a1 1 0 1 0 0 2h3a4.017 4.017 0 0 0 2.901-1.246Z"/></svg>
  