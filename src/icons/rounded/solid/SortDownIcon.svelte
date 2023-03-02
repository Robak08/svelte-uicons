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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.744 18a2.67 2.67 0 0 1-1.985-.886l-6.431-6.527c-.602-.657-.747-1.535-.402-2.317A2.1 2.1 0 0 1 4.871 7h13.745c.854 0 1.6.486 1.944 1.269s.2 1.66-.376 2.291l-6.487 6.589a2.647 2.647 0 0 1-1.953.852Z"/></svg>
  