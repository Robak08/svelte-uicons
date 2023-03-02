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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.759 12.266a3.974 3.974 0 0 1-2.068 2.257L1.42 23.908a1 1 0 0 1-.84-1.816L5 20.046v-5.78a5.958 5.958 0 0 1 1.758-4.243L10.781 6H3a1 1 0 0 1 0-2h8.507A3.277 3.277 0 0 1 15 6.718a2.978 2.978 0 0 1-.879 2.159S7.036 15.957 7 15.984v3.136l13.849-6.411a2 2 0 0 0 .963-2.656 1 1 0 0 1 1.812-.846 3.975 3.975 0 0 1 .135 3.059ZM16.5 5A2.5 2.5 0 1 0 14 2.5 2.5 2.5 0 0 0 16.5 5Z"/></svg>
  