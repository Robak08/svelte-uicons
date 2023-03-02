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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 9V3c0-1.654-1.346-3-3-3h-1.753l-2.846 4h1.994a1.603 1.603 0 0 1 1.337 2.491L12.85 9.528a1 1 0 0 1-1.7-1.054l1.533-2.473h-2.068c-.509 0-.994-.244-1.297-.652a1.625 1.625 0 0 1-.249-1.431C9.1 3.814 11.791.001 11.791.001H7.999c-1.654 0-3 1.346-3 3v6c0 3.52 2.612 6.441 6 6.928v6.072h-3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-6.072c3.388-.487 6-3.408 6-6.928Z"/></svg>
  