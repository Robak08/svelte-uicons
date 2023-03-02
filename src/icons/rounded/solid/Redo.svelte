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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.244 4a2 2 0 0 0-3.414 1.414V7H9a9.01 9.01 0 0 0-9 9v7a1 1 0 0 0 2 0 6.006 6.006 0 0 1 6-6h5.83v1.586A2 2 0 0 0 17.244 20l5.879-5.879a3 3 0 0 0 0-4.242Z"/></svg>
  