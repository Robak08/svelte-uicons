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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 10H7V7h1.5C10.43 7 12 5.43 12 3.5S10.43 0 8.5 0h-5C1.57 0 0 1.57 0 3.5S1.57 7 3.5 7H5v3c-2.757 0-5 2.243-5 5v4c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-4c0-2.757-2.243-5-5-5ZM2 3.5C2 2.673 2.673 2 3.5 2h5c.827 0 1.5.673 1.5 1.5S9.327 5 8.5 5h-5C2.673 5 2 4.327 2 3.5ZM5 12h14c1.654 0 3 1.346 3 3v3H2v-3c0-1.654 1.346-3 3-3Zm14 10H5a3.004 3.004 0 0 1-2.828-2h19.656A3.004 3.004 0 0 1 19 22ZM9 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/></svg>
  