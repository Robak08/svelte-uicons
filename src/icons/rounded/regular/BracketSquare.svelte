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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 24h-2c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-1.65 0-3 1.35-3 3v14c0 1.65 1.35 3 3 3h2c.55 0 1 .45 1 1s-.45 1-1 1Z"/></svg>
  