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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.543 7.104c.014.211.014.423.014.636 0 6.507-4.954 14.01-14.01 14.01v-.004A13.936 13.936 0 0 1 0 19.539a9.881 9.881 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.926 4.926 0 0 0 2.223-.084A4.924 4.924 0 0 1 .96 9.167v-.062a4.88 4.88 0 0 0 2.235.616A4.927 4.927 0 0 1 1.67 3.148a13.982 13.982 0 0 0 10.148 5.145 4.929 4.929 0 0 1 8.391-4.491 9.873 9.873 0 0 0 3.127-1.195 4.947 4.947 0 0 1-2.165 2.724A9.89 9.89 0 0 0 24 4.555a10.008 10.008 0 0 1-2.457 2.549z"/></svg>
  