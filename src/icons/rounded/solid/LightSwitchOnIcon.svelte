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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 11V6h6v5H9Zm13-6v14c0 2.757-2.243 5-5 5H7c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h10c2.757 0 5 2.243 5 5Zm-5 1c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v11l.001.052A3.003 3.003 0 0 0 10 20h4a3.003 3.003 0 0 0 2.999-2.948L17 17V6Zm-8 7v3h6v-3H9Z"/></svg>
  