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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 19a1 1 0 0 0-1 1 1 1 0 0 1-1 1h-2v-2a5.009 5.009 0 0 0 4.9-4H17a3 3 0 0 1-3-3V6H2V5a1 1 0 0 0-2 0s.012 2.18.035 2.264A4.019 4.019 0 0 0 2.9 10.583L7 11.754V13a6 6 0 0 0 4 5.65V21H7a1 1 0 0 0 0 2h14a3 3 0 0 0 3-3 1 1 0 0 0-1-1Zm-10 0h4v2h-4Zm3-13h-2V4H7a1 1 0 0 1 0-2h7a1 1 0 0 1 2 0h7a1 1 0 0 1 0 2h-7Zm0 6V6a8.008 8.008 0 0 1 7.931 7H17a1 1 0 0 1-1-1Z"/></svg>
  