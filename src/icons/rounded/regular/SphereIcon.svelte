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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 16c-5.724 0-10-2.111-10-4s4.276-4 10-4 10 2.111 10 4-4.276 4-10 4Zm0-14a10.013 10.013 0 0 1 9.189 6.062A18.635 18.635 0 0 0 12 6a18.635 18.635 0 0 0-9.189 2.062A10.013 10.013 0 0 1 12 2Zm0 20a10.013 10.013 0 0 1-9.189-6.062A18.635 18.635 0 0 0 12 18a18.635 18.635 0 0 0 9.189-2.062A10.013 10.013 0 0 1 12 22Z"/></svg>
  