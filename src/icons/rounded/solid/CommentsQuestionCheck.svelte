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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 16v5a3 3 0 0 1-3 3h-5c-2.955 0-5.535-1.615-6.92-4.004l.04-.04a12.54 12.54 0 0 0 4.992-1.455l1.974 1.914c.392.392.905.586 1.418.586.509 0 1.017-.191 1.399-.575l2.793-2.707a1 1 0 1 0-1.393-1.435l-2.814 2.707-1.662-1.611c2.36-1.853 3.93-4.543 4.145-7.586.017-.234.01-.466.012-.699l.013-.013c2.389 1.385 4.004 3.965 4.004 6.92ZM8.138 18H3.661A3.668 3.668 0 0 1 0 14.334V9.296C0 4.589 3.823.343 8.349.023c2.615-.19 5.17.769 7.014 2.612s2.798 4.402 2.613 7.016C17.646 14.333 13.324 18 8.137 18Zm2.112-4.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Zm1.703-6.785a3.023 3.023 0 0 0-2.417-2.417 2.986 2.986 0 0 0-2.463.653A2.993 2.993 0 0 0 6.001 7a1 1 0 1 0 2 0 .999.999 0 1 1 1.481.876c-.443.244-1.481.815-1.481 2.123a1 1 0 1 0 2 0c0-.053 0-.125.447-.371a3.016 3.016 0 0 0 1.506-3.164Z"/></svg>
  