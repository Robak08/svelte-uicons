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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m21.797 5.579-7-4.724a4.98 4.98 0 0 0-5.594 0L2.204 5.579A4.992 4.992 0 0 0 0 9.724V19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V9.724a4.995 4.995 0 0 0-2.203-4.145ZM18 13.5c0 1.379-1.122 2.5-2.5 2.5H15v.5c0 1.379-1.122 2.5-2.5 2.5h-1A2.503 2.503 0 0 1 9 16.5V16h-.5A2.503 2.503 0 0 1 6 13.5v-1C6 11.121 7.122 10 8.5 10H9v-.5C9 8.121 10.122 7 11.5 7h1C13.878 7 15 8.121 15 9.5v.5h.5c1.378 0 2.5 1.121 2.5 2.5v1Zm-2-1v1a.5.5 0 0 1-.5.5H14a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V15a1 1 0 0 0-1-1H8.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H10a1 1 0 0 0 1-1V9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 .5.5Z"/></svg>
  