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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.015 18.015V13.5a2.5 2.5 0 0 0 .233.285l4.95 4.95a1 1 0 1 0 1.414-1.414l-4.3-4.3h18.673a1 1 0 0 0 0-2H4.308l4.3-4.3A1 1 0 0 0 7.2 5.3l-4.95 4.95a2.491 2.491 0 0 0-.233.284V6.015a1 1 0 0 0-2 0v12a1 1 0 0 0 2 0Z"/></svg>
  