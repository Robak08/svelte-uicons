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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.794 8.724a.999.999 0 0 1 0-1.414l7-7a.999.999 0 1 1 1.414 1.414l-7 7a.997.997 0 0 1-1.414 0Zm18.91 2.082a.999.999 0 0 0-1.414 0l-7 7a.999.999 0 1 0 1.414 1.414l7-7a.999.999 0 0 0 0-1.414Zm-4.117-.19a1 1 0 0 0 0-1.414l-4.856-4.855a.999.999 0 0 0-1.414 0L8.86 8.803a1 1 0 0 0 0 1.414l1.755 1.755L.293 22.293a.999.999 0 1 0 1.414 1.414L12.03 13.385l1.687 1.687a.997.997 0 0 0 1.414 0l4.457-4.457Z"/></svg>
  