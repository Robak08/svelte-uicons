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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1Zm-5-1v-1a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0Zm16.991-10.635A7.185 7.185 0 0 1 16.724 19H6.057c-5.44.244-7.827-4.843-4.622-8.179A2.1 2.1 0 0 0 2.1 9.012C.987.257 12.758-3.473 17.016 4.165a1.979 1.979 0 0 0 1.356.978 6.994 6.994 0 0 1 5.619 7.222ZM10 15a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0Zm6 0a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0Zm3 8v-1a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0Z"/></svg>
  