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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 18h-.394a25.306 25.306 0 0 1-2.531-8H17a1 1 0 0 0 0-2h-.392s1.092-1.682 1.107-1.723A3 3 0 0 0 15 2h-2V1a1 1 0 0 0-2 0v1H9a3 3 0 0 0-2.712 4.277C6.307 6.318 7.4 8 7.4 8H7a1 1 0 0 0 0 2h.926a25.327 25.327 0 0 1-2.532 8H5a3 3 0 0 0 0 6h14a3 3 0 0 0 0-6ZM8.075 5.374A1 1 0 0 1 9 4h6a1 1 0 0 1 .928 1.374L14.224 8H9.779ZM9.935 10h4.13a25.75 25.75 0 0 0 2.318 8H7.617a25.75 25.75 0 0 0 2.318-8ZM19 22H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z"/></svg>
  