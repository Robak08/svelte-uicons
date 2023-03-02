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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5Zm0 2c1.654 0 3 1.346 3 3v14c0 .463-.105.901-.293 1.293L15.115 13.7a4.508 4.508 0 0 0 2.886-4.2c0-2.481-2.019-4.5-4.5-4.5h-2.5a4.007 4.007 0 0 0-3.105 1.48L3.708 2.293A2.98 2.98 0 0 1 5 2h14Zm-5.586 10L9.323 7.909A2.008 2.008 0 0 1 11 7h2.5C14.879 7 16 8.122 16 9.5S14.879 12 13.5 12h-.086ZM5 22c-1.654 0-3-1.346-3-3V5c0-.463.105-.901.293-1.293l17.999 18A2.98 2.98 0 0 1 19 22H5Zm4-9v5a1 1 0 1 1-2 0v-5a1 1 0 1 1 2 0Z"/></svg>
  