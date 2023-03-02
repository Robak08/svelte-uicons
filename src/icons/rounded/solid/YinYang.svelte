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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 18.5c0-3.54 2.43-6.68 5.77-7.47C14.18 10.46 16 8.08 16 5.5c0-1.21-.39-2.33-1.06-3.24C13.62.45 11.23-.18 9.06.36 3.86 1.68 0 6.4 0 12c0 5.08 3.17 9.43 7.65 11.18A7.447 7.447 0 0 1 6 18.5ZM10.5 4c.83 0 1.5.67 1.5 1.5S11.33 7 10.5 7 9 6.33 9 5.5 9.67 4 10.5 4ZM16.35.82A7.447 7.447 0 0 1 18 5.5c0 3.53-2.43 6.68-5.77 7.47C9.82 13.54 8 15.92 8 18.5c0 1.21.39 2.33 1.06 3.24 1.32 1.8 3.71 2.44 5.88 1.89C20.14 22.32 24 17.6 24 11.99c0-5.08-3.17-9.43-7.65-11.18ZM13.5 20c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z"/></svg>
  