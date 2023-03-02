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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 4.052C8.353-5.659-6.712 9.5 3.138 21.081a2.318 2.318 0 0 0 3.962-.465c.347-.519.682-1.687 1.486-1.616h6.824c.8-.074 1.161 1.129 1.5 1.646a2.316 2.316 0 0 0 3.9.487A12.058 12.058 0 0 0 20 4.052Zm-2.293 4.655-3.775 3.775a2 2 0 1 1-1.414-1.414l3.775-3.775a1 1 0 0 1 1.414 1.414Z"/></svg>
  