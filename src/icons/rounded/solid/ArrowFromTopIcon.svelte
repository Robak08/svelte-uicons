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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.278 17.129 13 21.407V2h5a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2h5v19.421l-4.293-4.292a1 1 0 1 0-1.414 1.414l4.579 4.578a3 3 0 0 0 4.242 0l4.578-4.578a1 1 0 1 0-1.414-1.414Z"/></svg>
  