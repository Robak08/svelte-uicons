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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 2a1 1 0 0 0-1 1v1h-2V3a1 1 0 0 0-2 0v2.5a2.5 2.5 0 0 0 2 2.45V17a2 2 0 0 1-2 2h-2v-8h-2a1 1 0 0 1 0-2h2V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v4h2a1 1 0 0 1 0 2H0v8a5.006 5.006 0 0 0 5 5h6a5.008 5.008 0 0 0 4.582-3H18a4 4 0 0 0 4-4V7.95a2.5 2.5 0 0 0 2-2.45V3a1 1 0 0 0-1-1Zm-12.268 9.49L8.85 14.527a1 1 0 0 1-1.7-1.054L8.683 11H6.615A1.614 1.614 0 0 1 5.07 8.917a1 1 0 0 1 .1-.234l1.978-3.207a1 1 0 1 1 1.7 1.048L7.328 9H9.4a1.6 1.6 0 0 1 1.336 2.49Z"/></svg>
  