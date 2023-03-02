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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 22a1 1 0 0 1-1 1h-5a2 2 0 0 1-2-2v-6a4.005 4.005 0 0 0-4.399-3.981C9.523 11.221 8 13.089 8 15.177v5.822a2 2 0 0 1-2 2H1a1 1 0 1 1 0-2h1V8h20v13h1a1 1 0 0 1 1 1ZM1.586 6h20.828l.885-.884a2.404 2.404 0 0 0 .522-2.627 2.405 2.405 0 0 0-2.228-1.488H2.406A2.402 2.402 0 0 0 .179 2.488a2.406 2.406 0 0 0 .522 2.628L1.586 6Z"/></svg>
  