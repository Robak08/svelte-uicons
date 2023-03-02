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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 5.272a16.493 16.493 0 0 0-7.755 2.62 6.55 6.55 0 0 1 5.122-4.839A2.2 2.2 0 0 1 11 5.272Zm12.654-.023a4.529 4.529 0 0 0-3.083-1.82 4.529 4.529 0 0 0-1.82-3.083A1.718 1.718 0 0 0 16 1.715V7C8.483 7 4.194 8.437 1.963 12.194a13.756 13.756 0 0 1 9.837 9.849C15.561 19.813 17 15.523 17 8h5.285a1.718 1.718 0 0 0 1.369-2.751ZM19.2 13h-.475a22.8 22.8 0 0 1-.813 4h.814c2.487.077 3.286-3.876.474-4Zm-9.249 9.911c-2.4.688-6.537 2.143-8.78-.082a3.983 3.983 0 0 1-1.162-3.086 20.836 20.836 0 0 1 1.081-5.7 11.724 11.724 0 0 1 8.861 8.868ZM5 20a1 1 0 0 0-2 0 1 1 0 0 0 2 0Z"/></svg>
  