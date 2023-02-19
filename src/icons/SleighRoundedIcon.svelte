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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-sleigh {customClass}"><path d="M19 17a5.006 5.006 0 0 0 5-5V9a3 3 0 0 0-6 0h-4.754a3 3 0 0 1-2.91-2.272l-.485-1.941A4.993 4.993 0 0 0 5 1H4a4 4 0 0 0-4 4v7a5.006 5.006 0 0 0 5 5h1v4H1a1 1 0 0 0 0 2h19a4 4 0 0 0 4-4 1 1 0 0 0-2 0 2 2 0 0 1-2 2h-2v-4ZM2 12V5a2 2 0 0 1 2-2h1a3 3 0 0 1 2.91 2.272l.49 1.941A4.991 4.991 0 0 0 13.246 11H18a2 2 0 0 0 2-2 1 1 0 0 1 2 0v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm14 9H8v-4h8Z"/></svg>
  