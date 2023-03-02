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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 24c-.22 0-.44-.07-.62-.22C13.16 23.6 8 19.39 8 12S13.16.39 13.38.22c.43-.35 1.06-.27 1.41.16.34.43.27 1.06-.16 1.41-.04.04-4.62 3.81-4.62 10.22s4.58 10.18 4.63 10.22a1.002 1.002 0 0 1-.63 1.78Z"/></svg>
  