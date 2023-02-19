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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-face-awesome {customClass}"><path d="M6 11c-.55 0-1-.45-1-1V9c0-1.65 1.35-3 3-3s3 1.35 3 3v1c0 .55-.45 1-1 1s-1-.45-1-1v-.65c-.15.09-.31.15-.5.15-.55 0-1-.45-1-1 0-.15.04-.28.09-.41-.35.16-.59.5-.59.91v1c0 .55-.45 1-1 1ZM19 9v1c0 .55-.45 1-1 1s-1-.45-1-1v-.65c-.15.09-.31.15-.5.15-.55 0-1-.45-1-1 0-.15.04-.28.09-.41-.35.16-.59.5-.59.91v1c0 .55-.45 1-1 1s-1-.45-1-1V9c0-1.65 1.35-3 3-3s3 1.35 3 3Z"/><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0Zm0 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Z"/><path d="M18.08 13.32H5.92c-.59 0-1.05.56-.88 1.13.88 3.02 3.66 5.22 6.97 5.22s6.08-2.21 6.97-5.22c.17-.57-.29-1.13-.88-1.13ZM12 17.86h-.04c.49-1.57 1.94-2.72 3.67-2.72.38 0 .73.01 1.04.05A5.42 5.42 0 0 1 12 17.86Z"/></svg>
  