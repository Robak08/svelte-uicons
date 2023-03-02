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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.961 11.631c0 5.539-2.414 9.621-5.535 12.369 5.27-1.107 9.303-6.935 9.303-13.207a26.158 26.158 0 0 0-.025-1.481l4.073-1.392c.515-.18.845-.461.846-.953l.003-.505c-2.202-.04-10.185-.304-10.185-.304.748 1.177 1.52 3.197 1.52 5.473M10.13 4.74c3.736.566 6.056.122 6.056.122s-.533-1.965-2.077-1.972c-2.446-.01-4.169-.258-4.169-.258C4.725 1.843 3.374 0 3.374 0c.304 2.031 3.419 4.232 6.756 4.74"/></svg>
  