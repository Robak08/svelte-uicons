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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 14a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm4-1h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm-5 4H9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm5 0h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2ZM10 5H9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm5 0h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm-5 4H9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm5 0h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm9 1v9c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-5a5.008 5.008 0 0 1 4-4.899V5c0-2.757 2.243-5 5-5h6c2.757 0 5 2.243 5 5v.101c2.279.465 4 2.484 4 4.899Zm-2 0c0-1.654-1.346-3-3-3a1 1 0 0 1-1-1V5c0-1.654-1.346-3-3-3H9C7.346 2 6 3.346 6 5v5a1 1 0 0 1-1 1c-1.654 0-3 1.346-3 3v5c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-9Zm-3 3h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm0 4h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2ZM6 13H5a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm0 4H5a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm13-8h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Z"/></svg>
  