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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 7.364V6h1a1 1 0 0 0 0-2h-1c0-2.206-1.794-4-4-4S4 1.794 4 4v3.364C1.615 8.623 0 11.257 0 14v5c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5v-5c0-2.743-1.615-5.377-4-6.636ZM6 4c0-1.103.897-2 2-2s2 .897 2 2v3H6V4Zm8 15c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3v-5c0-2.085 1.337-4.156 3.204-5h5.591c1.867.844 3.204 2.915 3.204 5v5Zm-5-6H7c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c1.654 0 3-1.346 3-3s-1.346-3-3-3Zm0 4H7c-.551 0-1-.449-1-1s.449-1 1-1h2c.551 0 1 .449 1 1s-.449 1-1 1Zm9-12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
  