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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.427 16.935a1.5 1.5 0 0 0-2.121 0l-2.781 2.779L13.5 1.5A1.5 1.5 0 0 0 12 0a1.5 1.5 0 0 0-1.5 1.5l.023 18.2-2.763-2.765a1.5 1.5 0 0 0-2.121 2.121l3.919 3.919a3.5 3.5 0 0 0 4.949 0l3.92-3.919a1.5 1.5 0 0 0 0-2.121Z"/></svg>
  