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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 7h-4.83V5.414A2 2 0 0 0 6.756 4L.876 9.879a3 3 0 0 0 0 4.242L6.756 20a2 2 0 0 0 3.414-1.414V17H16a6.006 6.006 0 0 1 6 6 1 1 0 0 0 2 0v-7a9.01 9.01 0 0 0-9-9Z"/></svg>
  