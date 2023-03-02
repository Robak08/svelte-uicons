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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 22h-3V6c0-2.206-1.794-4-4-4h-.535a3.996 3.996 0 0 0-.929-1.092 3.987 3.987 0 0 0-3.32-.829L8.019.718A5.013 5.013 0 0 0 4 5.621V22H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2Zm-11.5-8a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.5 14Zm6.5 8h-2V4c1.103 0 2 .897 2 2v16Z"/></svg>
  