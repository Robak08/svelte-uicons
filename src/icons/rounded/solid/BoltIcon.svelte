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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.24 24a2.262 2.262 0 0 1-.948-.212 2.18 2.18 0 0 1-1.2-2.622L10.653 16H6.975A3 3 0 0 1 4.1 12.131l3.024-10A2.983 2.983 0 0 1 10 0h3.693a2.6 2.6 0 0 1 2.433 3.511L14.443 8H17a3 3 0 0 1 2.483 4.684l-6.4 10.3A2.2 2.2 0 0 1 11.24 24Z"/></svg>
  