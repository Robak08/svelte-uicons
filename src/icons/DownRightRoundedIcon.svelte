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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-down-right {customClass}"><path d="M10 23c-1.23 0-2.29-.71-2.77-1.84-.48-1.14-.23-2.39.64-3.27l1.48-1.48-7.18-7.17a4.008 4.008 0 0 1 0-5.66l1.41-1.42a4.008 4.008 0 0 1 5.66 0l7.17 7.17 1.47-1.47c.88-.87 2.12-1.12 3.27-.64C22.29 7.69 23 8.76 23 9.99v9c0 2.2-1.8 4-4 4h-9ZM6.41 3c-.51 0-1.03.19-1.42.58L3.58 5c-.78.78-.78 2.05 0 2.83l7.88 7.88c.19.19.29.44.29.71s-.11.52-.29.71l-2.18 2.18c-.43.44-.27.94-.21 1.09.06.14.3.61.92.61h9c1.1 0 2-.9 2-2V10c0-.62-.47-.87-.61-.92s-.65-.22-1.09.21l-2.18 2.18a.996.996 0 0 1-1.41 0L7.83 3.58C7.44 3.19 6.93 3 6.42 3Z"/></svg>
  