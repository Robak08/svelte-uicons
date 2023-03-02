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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.42 6C1.19 4.24 2.95 3 5 3h14c2.05 0 3.81 1.24 4.58 3H.42ZM16 11.99V16h1.48c.23-.4.52-1.09.52-2s-.29-1.6-.53-2.01H16ZM8 12H6.52c-.24.41-.52 1.09-.52 2s.29 1.6.53 2.01H8V12Zm2 4.01h4v-4.02h-4v4.02ZM24 8v8c0 2.76-2.24 5-5 5H5c-2.76 0-5-2.24-5-5V8h24Zm-4 6c0-1.35-.44-2.39-.8-3.02-.35-.61-1.01-.98-1.72-.98H6.52c-.71 0-1.37.38-1.72.98-.37.63-.8 1.66-.8 3.02s.44 2.39.8 3.02c.35.61 1.01.98 1.72.98h10.95c.71 0 1.37-.38 1.72-.98.37-.63.8-1.66.8-3.02Z"/></svg>
  