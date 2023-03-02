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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.318 7.12c-.42-.2-.907-.146-1.313.181L19 11V8.203a1.19 1.19 0 0 0-.68-1.084c-.42-.2-.907-.146-1.313.181l-3.006 3.701V8.204a1.19 1.19 0 0 0-.68-1.084c-.42-.2-.907-.146-1.313.181l-3.723 3.711-1.949-9.435A2.01 2.01 0 0 0 4.382 0H2a2 2 0 0 0-2 2v17a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V8.204c0-.466-.261-.882-.682-1.084ZM10 18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Zm5 0a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Zm5 0a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Z"/></svg>
  