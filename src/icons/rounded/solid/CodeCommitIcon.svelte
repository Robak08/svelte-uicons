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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 11h-4.072C18.441 7.612 15.52 5 12 5s-6.442 2.612-6.928 6H1a1 1 0 0 0 0 2h4.072c.487 3.388 3.408 6 6.928 6s6.441-2.612 6.928-6H23a1 1 0 1 0 0-2Z"/></svg>
  