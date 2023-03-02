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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.122 12.536a3 3 0 0 0-4.244 0l-6.84 6.84A4.991 4.991 0 0 0 5 24h14a4.969 4.969 0 0 0 2.753-.833Z"/><circle cx="18" cy="6" r="2"/><path d="M19 0H5a5.006 5.006 0 0 0-5 5v11.586l5.464-5.464a5 5 0 0 1 7.072 0l10.631 10.631A4.969 4.969 0 0 0 24 19V5a5.006 5.006 0 0 0-5-5Zm-1 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"/></svg>
  