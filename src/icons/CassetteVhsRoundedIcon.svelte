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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-cassette-vhs {customClass}"><path d="M19 3H5C2.24 3 0 5.24 0 8v8c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5Zm3 13c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V8c0-.35.07-.69.18-1h19.64c.11.31.18.65.18 1v8Zm-4.52-7H6.52c-.71 0-1.37.38-1.72.98-.37.63-.8 1.66-.8 3.02s.44 2.39.8 3.02c.35.61 1.01.98 1.72.98h10.95c.71 0 1.37-.38 1.72-.98.37-.63.8-1.66.8-3.02s-.44-2.39-.8-3.02c-.35-.61-1.01-.98-1.72-.98ZM14 10.99V15h-4v-4.01h4Zm-8 2c0-.91.29-1.6.52-2H8V15H6.53c-.24-.41-.53-1.1-.53-2.01Zm11.48 2H16v-4.01h1.47c.24.41.53 1.1.53 2.01s-.29 1.6-.52 2Z"/></svg>
  