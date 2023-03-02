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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 15a2 2 0 0 1-4 0 2 2 0 0 1 4 0ZM23.672 3.191 20.771 8a2.242 2.242 0 0 1 1.871 3.449c-1.748 2.734-5.019 7.655-7.278 9.915A9 9 0 0 1 2.636 8.636c2.256-2.256 7.18-5.528 9.914-7.278A2.242 2.242 0 0 1 16 3.24l4.86-2.9a2.023 2.023 0 0 1 2.533.283 2.034 2.034 0 0 1 .279 2.568ZM13 15c-.138-5.275-7.863-5.274-8 0 .138 5.275 7.863 5.274 8 0Z"/></svg>
  