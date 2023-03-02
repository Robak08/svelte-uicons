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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 2.75c0 2.163-2.82 4.851-4.225 5.978a1.239 1.239 0 0 1-1.55 0C8.82 7.6 6 4.913 6 2.75A2.634 2.634 0 0 1 8.5 0 2.634 2.634 0 0 1 11 2.75 2.634 2.634 0 0 1 13.5 0 2.634 2.634 0 0 1 16 2.75Zm7.338 9.6-7.7 8.409A10 10 0 0 1 8.262 24H4a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h7.787a2.218 2.218 0 0 1 2.164 2.685 2.28 2.28 0 0 1-1.94 1.732L7.848 16A1 1 0 0 0 7 17.131a1 1 0 0 0 1.131.849l4.252-.6A4.234 4.234 0 0 0 16 13.213a4.081 4.081 0 0 0-.065-.638l3.542-3.737a2.606 2.606 0 0 1 3.671-.157 2.616 2.616 0 0 1 .19 3.664Z"/></svg>
  