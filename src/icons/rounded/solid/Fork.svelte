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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.707 5.95a1 1 0 0 0-1.414 0l-5.172 5.171a3.074 3.074 0 0 1-3.4.568l6.982-6.982a1 1 0 1 0-1.414-1.414L12.3 10.286a2.984 2.984 0 0 1 .579-3.407l5.171-5.172A1 1 0 0 0 16.636.293l-5.171 5.172a5.02 5.02 0 0 0-.636 6.292L.293 22.293a1 1 0 0 0 1.414 1.414l10.536-10.536a5.02 5.02 0 0 0 6.292-.636l5.172-5.171a1 1 0 0 0 0-1.414Z"/></svg>
  