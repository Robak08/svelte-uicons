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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.96 17.86H12c1.99 0 3.72-1.08 4.67-2.67a8.43 8.43 0 0 0-1.04-.05c-1.73 0-3.18 1.15-3.67 2.72Z"/><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0ZM5 9c0-1.65 1.35-3 3-3s3 1.35 3 3v1c0 .55-.45 1-1 1s-1-.45-1-1v-.65c-.15.09-.31.15-.5.15-.55 0-1-.45-1-1 0-.15.04-.28.09-.41-.35.16-.59.5-.59.91v1c0 .55-.45 1-1 1s-1-.45-1-1V9Zm13.97 5.45c-.88 3.02-3.66 5.22-6.97 5.22s-6.08-2.21-6.97-5.22c-.17-.57.29-1.13.88-1.13h12.17c.59 0 1.05.56.88 1.13ZM19 10c0 .55-.45 1-1 1s-1-.45-1-1v-.65c-.15.09-.31.15-.5.15-.55 0-1-.45-1-1 0-.15.04-.28.09-.41-.35.16-.59.5-.59.91v1c0 .55-.45 1-1 1s-1-.45-1-1V9c0-1.65 1.35-3 3-3s3 1.35 3 3v1Z"/></svg>
  