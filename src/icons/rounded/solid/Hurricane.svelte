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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.451 16.337A11.473 11.473 0 0 1 10.43 24H6a1 1 0 0 1 0-2 6.443 6.443 0 0 0 3.819-1.24 10.041 10.041 0 0 1-7.266-13.1A11.471 11.471 0 0 1 13.575 0H18a1 1 0 0 1 0 2 6.442 6.442 0 0 0-3.818 1.24 10.043 10.043 0 0 1 7.267 13.1ZM15 12a3 3 0 0 0-6 0 3 3 0 0 0 6 0Z"/></svg>
  