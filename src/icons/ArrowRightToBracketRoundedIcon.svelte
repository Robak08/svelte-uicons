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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-right-to-bracket {customClass}"><path d="M24 5v14c0 2.76-2.24 5-5 5h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c2.76 0 5 2.24 5 5Zm-6 7c0-.8-.31-1.55-.87-2.11L12.72 5.3a.996.996 0 1 0-1.44 1.38l4.15 4.31H1c-.55 0-1 .45-1 1s.45 1 1 1h14.42l-4.15 4.31c-.38.4-.37 1.03.03 1.41.19.19.44.28.69.28.26 0 .52-.1.72-.31l4.4-4.57c.57-.57.88-1.32.88-2.12Z"/></svg>
  