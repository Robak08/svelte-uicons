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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.808 9.845a1.6 1.6 0 0 1-.076 1.645L8.85 14.527a1 1 0 0 1-1.7-1.054L8.683 11H6.615A1.614 1.614 0 0 1 5.07 8.917c.03-.082 2.078-3.441 2.078-3.441a1 1 0 1 1 1.7 1.048L7.328 9H9.4a1.6 1.6 0 0 1 1.408.845ZM24 3v2.5a2.5 2.5 0 0 1-2 2.45V17a4 4 0 0 1-4 4h-2.418A5.008 5.008 0 0 1 11 24H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v14h2a2 2 0 0 0 2-2V7.95a2.5 2.5 0 0 1-2-2.45V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0ZM14 19v-8h-1a1 1 0 0 1 0-2h1V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v4h1a1 1 0 0 1 0 2H2v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3Z"/></svg>
  