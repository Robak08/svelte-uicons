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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.899 7H4V6c0-2.757 2.243-5 5-5h2.056c.463 0 .927.109 1.341.316l3.156 1.578c.138.069.293.105.447.105h3a5.01 5.01 0 0 1 4.899 4ZM4 9v5c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V9H4Zm15 12H5c-1.654 0-3-1.346-3-3V8C1.994 6.692.005 6.693 0 8v10c0 2.757 2.243 5 5 5h14c1.308-.005 1.307-1.995 0-2Z"/></svg>
  