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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-hdd {customClass}"><path d="M18 0H6C3.24 0 1 2.24 1 5v14c0 2.76 2.24 5 5 5h12c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5ZM6 2h12c1.65 0 3 1.35 3 3v10H3V5c0-1.65 1.35-3 3-3Zm12 20H6c-1.65 0-3-1.35-3-3v-2h18v2c0 1.65-1.35 3-3 3Zm2-2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Zm-4 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"/></svg>
  