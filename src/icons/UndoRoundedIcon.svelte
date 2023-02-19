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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undo {customClass}"><path d="M23 24a1 1 0 0 1-1-1 6.006 6.006 0 0 0-6-6h-5.83v1.586A2 2 0 0 1 6.756 20L.877 14.121a3 3 0 0 1 0-4.242L6.756 4a2 2 0 0 1 3.414 1.414V7H15a9.01 9.01 0 0 1 9 9v7a1 1 0 0 1-1 1ZM8.17 5.414l-5.879 5.879a1 1 0 0 0 0 1.414l5.879 5.879V16a1 1 0 0 1 1-1H16a7.984 7.984 0 0 1 6 2.714V16a7.008 7.008 0 0 0-7-7H9.17a1 1 0 0 1-1-1Z"/></svg>
  