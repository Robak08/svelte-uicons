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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.916 19.6-2.45-5.6H23a1 1 0 1 0 0-2h-2.409l-3.062-7H20a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2h2.471l-3.062 7H1a1 1 0 1 0 0 2h1.534l-2.45 5.6A.998.998 0 0 0 .999 21a1 1 0 0 0 .917-.6l2.8-6.4h14.568l2.8 6.4a1 1 0 1 0 1.832-.8ZM5.591 12l3.062-7h6.693l3.062 7H5.591Z"/></svg>
  