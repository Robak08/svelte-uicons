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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 2a2 2 0 0 1-4 0 2 2 0 0 1 4 0Zm5.848 16.636A4.984 4.984 0 0 1 16 18.575a5 5 0 0 1-4 0 5 5 0 0 1-4 0 4.993 4.993 0 0 1-3.851.061 5.305 5.305 0 0 1-1.632.357l.157.882A4.993 4.993 0 0 0 7.6 24h8.8a4.991 4.991 0 0 0 4.922-4.125l.157-.882a5.274 5.274 0 0 1-1.631-.357Zm3.676-7.224A11.888 11.888 0 0 0 15.2 4.383a4.012 4.012 0 0 1-6.393 0 11.891 11.891 0 0 0-8.33 7.03A9.12 9.12 0 0 0 0 14.462 2.406 2.406 0 0 0 2.385 17c.454 0 1.563-.308 1.685-.723A2.982 2.982 0 0 0 8 16.22a2.99 2.99 0 0 0 4 0 2.989 2.989 0 0 0 4 0 2.982 2.982 0 0 0 3.93.057c.122.415 1.232.723 1.685.723A2.408 2.408 0 0 0 24 14.462a9.121 9.121 0 0 0-.476-3.05Z"/></svg>
  