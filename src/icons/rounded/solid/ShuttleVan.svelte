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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 2h1.4a5.005 5.005 0 0 1 4.57 2.97L23.205 10H15ZM8 2v8h5V2Zm-2 8V2H5a5.006 5.006 0 0 0-5 5v3Zm-6 2v2a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-.727A7 7 0 0 0 23.884 12Zm7.942 8c.587 3.954-5.472 3.952-4.884 0Zm13 0c.587 3.954-5.472 3.952-4.884 0Z"/></svg>
  