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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-pennant {customClass}"><path d="M21.93 9.147 3.43 3.4A2 2 0 1 0 1 3.732V23a1 1 0 0 0 2 0v-2.264l18.949-5.89a3 3 0 0 0-.019-5.7Zm-20.9-5.4s0 .006-.001.002Zm20.307 9.193L3 18.642V5.358l18.316 5.693a1 1 0 0 1 .02 1.891Z"/></svg>
  