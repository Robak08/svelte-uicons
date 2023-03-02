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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 12h-8.979L9.967 9.065A4.845 4.845 0 0 0 6.001 7h-.5c-1.93 0-3.5 1.57-3.5 3.5v1.684a2.996 2.996 0 0 0-2 2.816v4c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-4c0-1.654-1.346-3-3-3ZM9 14v8H7v-8h2Zm2 0h2v8h-2v-8Zm4 0h2v8h-2v-8ZM5.5 9H6c.926 0 1.796.453 2.328 1.212L9.58 12H4v-1.5C4 9.673 4.673 9 5.5 9ZM2 19v-4c0-.551.449-1 1-1h2v8c-1.654 0-3-1.346-3-3Zm20 0c0 1.654-1.346 3-3 3v-8h2c.551 0 1 .449 1 1v4ZM3 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm16-1.328v-.169A1 1 0 0 1 19.997 0H20a1 1 0 0 1 1 .997v.172c0 .638.258 1.261.708 1.71A4.385 4.385 0 0 1 23.001 6a1 1 0 0 1-2 0c0-.645-.251-1.251-.707-1.707a4.385 4.385 0 0 1-1.293-3.122Zm-2.707 3.814A4.385 4.385 0 0 1 15 1.864V1a1 1 0 0 1 2 0v.864c0 .635.258 1.258.707 1.707A4.385 4.385 0 0 1 19 6.692V7a1 1 0 0 1-2 0v-.308c0-.645-.251-1.251-.707-1.707Z"/></svg>
  