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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.731 11.356-3.343-3.3A.816.816 0 0 0 19 8.638V11h-6V5h2.363a.816.816 0 0 0 .58-1.389L12.644.27a.9.9 0 0 0-1.288 0l-3.3 3.342A.816.816 0 0 0 8.637 5H11v6H5V8.638a.816.816 0 0 0-1.388-.581l-3.343 3.3a.906.906 0 0 0 0 1.289l3.343 3.3A.816.816 0 0 0 5 15.363V13h6v6H8.637a.816.816 0 0 0-.58 1.389l3.3 3.342a.9.9 0 0 0 1.288 0l3.3-3.342A.816.816 0 0 0 15.363 19H13v-6h6v2.363a.816.816 0 0 0 1.388.581l3.343-3.3a.906.906 0 0 0 0-1.288Z"/></svg>
  