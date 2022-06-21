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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-receipt {customClass}"><path d="M16 0H8a5.006 5.006 0 0 0-5 5v18a1 1 0 0 0 1.564.825l2.106-1.439 2.106 1.439a1 1 0 0 0 1.13 0l2.1-1.439 2.1 1.439a1 1 0 0 0 1.131 0l2.1-1.438 2.1 1.437A1 1 0 0 0 21 23V5a5.006 5.006 0 0 0-5-5Zm3 21.1-1.1-.752a1 1 0 0 0-1.132 0l-2.1 1.439-2.1-1.439a1 1 0 0 0-1.131 0l-2.1 1.439-2.1-1.439a1 1 0 0 0-1.129 0L5 21.1V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3Z"/><rect width="10" height="2" x="7" y="8" rx="1"/><rect width="8" height="2" x="7" y="12" rx="1"/></svg>
  