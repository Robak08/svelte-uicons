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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 7v12c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7H2Zm10 11H8a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2Zm4-5H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2Zm6-8H2c0-2.757 2.243-5 5-5h10c2.757 0 5 2.243 5 5Z"/></svg>
  