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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.931 22.634-7.787-19.82C15.46 1.072 13.872-.01 12-.01S8.54 1.072 7.856 2.814L.069 22.634a1 1 0 1 0 1.861.731l2.501-6.366h15.137l2.501 6.366a1.001 1.001 0 0 0 1.296.565 1 1 0 0 0 .565-1.296ZM5.217 15l4.5-11.455c.451-1.147 1.475-1.556 2.283-1.556s1.832.409 2.283 1.556L18.783 15H5.217Z"/></svg>
  