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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 10.5a10.01 10.01 0 0 0-2 .273A5.006 5.006 0 0 0 13 6h-.272A9.929 9.929 0 0 0 13 4a4 4 0 0 0-8 0 9.929 9.929 0 0 0 .272 2H5a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h1.224a.772.772 0 0 0 .748-.975C6.623 21.766 6 21 6 20a3 3 0 0 1 6 0c0 1-.632 1.768-.973 3.029a.772.772 0 0 0 .748.971H13a5 5 0 0 0 5-5v-.772a10.02 10.02 0 0 0 2 .272 4 4 0 0 0 0-8Z"/></svg>
  