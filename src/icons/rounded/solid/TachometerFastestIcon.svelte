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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.994 4.05C8.352-5.66-6.713 9.5 3.136 21.079a2.318 2.318 0 0 0 3.964-.464l.613-1.1A1 1 0 0 1 8.587 19h6.823a1 1 0 0 1 .874.515l.629 1.132a2.316 2.316 0 0 0 3.9.486 12.057 12.057 0 0 0-.819-17.083Zm-.625 12.184a1 1 0 0 1-1.318.514l-4.867-2.136a2 2 0 1 1 .8-1.832l4.867 2.136a1 1 0 0 1 .518 1.318Z"/></svg>
  