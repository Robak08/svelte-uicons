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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.469 1.027A3 3 0 0 0 19.209 0H4.791a3 3 0 0 0-2.972 3.405L2.309 7H16.1a1 1 0 0 1 0 2H2.582l1.456 10.675A5.017 5.017 0 0 0 8.992 24h6.016a5.017 5.017 0 0 0 4.954-4.324l2.219-16.271a3 3 0 0 0-.712-2.378Z"/></svg>
  