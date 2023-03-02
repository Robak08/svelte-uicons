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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5 18a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1Zm5-1V7a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0Zm10 0V7a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0Zm-6-.5v-9a1.5 1.5 0 1 0-3 0v9a1.5 1.5 0 1 0 3 0ZM7 21a1 1 0 0 0-1-1H4c-1.103 0-2-.897-2-2v-2a1 1 0 1 0-2 0v2c0 2.206 1.794 4 4 4h2a1 1 0 0 0 1-1Zm17-3v-2a1 1 0 1 0-2 0v2c0 1.103-.897 2-2 2h-2a1 1 0 1 0 0 2h2c2.206 0 4-1.794 4-4Zm0-10V6c0-2.206-1.794-4-4-4h-2a1 1 0 1 0 0 2h2c1.103 0 2 .897 2 2v2a1 1 0 1 0 2 0ZM2 8V6c0-1.103.897-2 2-2h2a1 1 0 1 0 0-2H4C1.794 2 0 3.794 0 6v2a1 1 0 1 0 2 0Z"/><rect width="1" height="12" x="15" y="6" rx=".5" ry=".5"/><path d="M15.5 6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-.5-.5Z"/></svg>
  