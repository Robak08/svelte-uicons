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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 1.171v-.168A1 1 0 0 1 19.997 0H20a1 1 0 0 1 1 .997v.171c0 .647.251 1.254.708 1.71A4.386 4.386 0 0 1 23 5.999a1 1 0 0 1-2 0c0-.635-.258-1.258-.707-1.707A4.386 4.386 0 0 1 19 1.17Zm-2 5.521V7a1 1 0 0 0 2 0v-.308a4.386 4.386 0 0 0-1.292-3.121A2.399 2.399 0 0 1 17 1.863V.999a1 1 0 0 0-2 0v.864c0 1.179.459 2.287 1.293 3.122.456.456.707 1.062.707 1.707ZM24 15v4a5.003 5.003 0 0 1-3 4.576V15a1 1 0 0 0-2 0v9h-3v-9a1 1 0 0 0-2 0v9h-4v-9a1 1 0 0 0-2 0v9H5v-9a1 1 0 0 0-2 0v8.576A5.003 5.003 0 0 1 0 19v-4a2.99 2.99 0 0 1 2-2.816V10.5C2 8.57 3.57 7 5.5 7H6c1.578 0 3.061.772 3.966 2.065L12.02 12h8.979a3 3 0 0 1 3 3ZM5.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>
  