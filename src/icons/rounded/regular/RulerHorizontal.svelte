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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 6.96H4c-2.206 0-4 1.794-4 4V13c0 2.206 1.794 4 4 4h16c2.206 0 4-1.794 4-4v-2.04c0-2.206-1.794-4-4-4ZM22 13c0 1.103-.897 2-2 2h-1v-2.015a1 1 0 1 0-2 0V15h-2v-2.015a1 1 0 1 0-2 0V15h-2v-2.015a1 1 0 1 0-2 0V15H7.024v-2.015a1 1 0 1 0-2 0V15H4c-1.103 0-2-.897-2-2v-2.04c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2V13Z"/></svg>
  