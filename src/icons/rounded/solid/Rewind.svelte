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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.42 20.656a3.77 3.77 0 0 1-2.233-.735l-6.641-4.87a3.784 3.784 0 0 1 0-6.1l6.641-4.87A3.783 3.783 0 0 1 14.2 6.853l3.782-2.774A3.784 3.784 0 0 1 24 7.13v9.74a3.784 3.784 0 0 1-6.021 3.051L14.2 17.147a3.79 3.79 0 0 1-3.777 3.509Z"/></svg>
  