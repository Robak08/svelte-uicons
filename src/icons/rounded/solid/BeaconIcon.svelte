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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 24h-6.66C5.87 24 .46 19.1.03 12.85c-.24-3.47 1.03-6.88 3.48-9.33C5.97 1.06 9.38-.21 12.85.03 19.1.46 24 5.87 24 12.34v5.82c0 3.44-2.06 5.85-5 5.85Z"/></svg>
  