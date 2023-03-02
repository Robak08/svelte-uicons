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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.5 9 11 2h2a1 1 0 0 0 0-2s-2.355-.022-2.442 0A3.043 3.043 0 0 0 8 3v6H5L3.01 6.613A1.712 1.712 0 0 0 0 7.7v8.6a1.712 1.712 0 0 0 3.01 1.089L5 15h3v6a3.051 3.051 0 0 0 2.5 3c.1.031 2.5 0 2.5 0a1 1 0 0 0 0-2h-2l4.5-7c3.958-.294 8.5-.674 8.5-3s-4.541-2.719-8.5-3Z"/></svg>
  