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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 12a5.993 5.993 0 0 1-5.191-9H4.242L4.2 2.648A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H19a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.821-2h11.921a5 5 0 0 0 4.921-4.113l.238-1.319A5.984 5.984 0 0 1 18 12Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/><path d="M15 7h2v2a1 1 0 0 0 2 0V7h2a1 1 0 0 0 0-2h-2V3a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2Z"/></svg>
  