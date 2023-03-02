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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 22H9a.99.99 0 0 1-.851-.474.989.989 0 0 1-.044-.974l.99-1.979a6.45 6.45 0 0 0 2.276.426H19.5c.734 0 1.429-.321 1.905-.881s.681-1.302.562-2.035c-.194-1.188-1.3-2.084-2.573-2.084h-8.009c-.674 0-1.27-.454-1.447-1.104L9.15 9.999H19a1 1 0 1 0 0-2H8.606L6.967 1.98C6.631.701 5.401-.153 4.162.023a2.505 2.505 0 0 0-1.723 1.095 2.504 2.504 0 0 0-.331 2.015l2.99 11.068a6.484 6.484 0 0 0 2.252 3.393l-1.033 2.065c-.468.938-.419 2.028.132 2.919s1.504 1.423 2.552 1.423h12a1 1 0 1 0 0-2Z"/></svg>
  