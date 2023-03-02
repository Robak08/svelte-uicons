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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 22H5c-2.757 0-5-2.243-5-5V9h11v13ZM24 7c0-2.757-2.243-5-5-5H5C2.243 2 0 4.243 0 7h24ZM13 9v13h6c2.757 0 5-2.243 5-5V9H13Z"/></svg>
  