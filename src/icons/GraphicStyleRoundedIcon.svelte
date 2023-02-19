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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-graphic-style {customClass}"><path d="M8.5 5c.83 0 1.5.67 1.5 1.5S9.33 8 8.5 8 7 7.33 7 6.5 7.67 5 8.5 5Zm7.32 3.18-.35-1.42c-.11-.44-.51-.76-.97-.76s-.86.31-.97.76l-.35 1.41-1.4.32c-.45.1-.77.5-.77.96 0 .46.3.86.74.98l1.43.39.36 1.43c.11.44.51.76.97.76s.86-.31.97-.76l.35-1.42 1.42-.35c.44-.11.76-.51.76-.97s-.31-.86-.76-.97l-1.42-.35Zm.79-3.3 1.76.74.7 1.75a1 1 0 0 0 1.86 0l.7-1.74 1.74-.7a1 1 0 0 0 0-1.86l-1.74-.7-.7-1.74a1 1 0 0 0-1.86 0l-.69 1.73-1.73.66c-.38.14-.64.51-.65.92 0 .41.23.78.61.94ZM24 9v10c0 2.76-2.24 5-5 5H5c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h10c.55 0 1 .45 1 1s-.45 1-1 1H5C3.35 2 2 3.35 2 5v6.59l.56-.56c1.34-1.34 3.53-1.34 4.88 0l5.58 5.58a1.4 1.4 0 0 0 1.97 0l.58-.58c1.34-1.34 3.53-1.34 4.88 0l1.56 1.56V9c0-.55.45-1 1-1s1 .45 1 1Zm-2.24 11.17-2.74-2.74a1.46 1.46 0 0 0-2.05 0l-.58.58a3.404 3.404 0 0 1-4.8 0l-5.58-5.58a1.46 1.46 0 0 0-2.05 0l-1.98 1.98V19c0 1.65 1.35 3 3 3h14c1.24 0 2.3-.75 2.76-1.83Z"/></svg>
  