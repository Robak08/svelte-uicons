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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.051 7.792C.562 3.436 5.721 0 12 0s11.438 3.436 11.949 7.792C23.438 11.821 18.279 15 12 15S.562 11.821.051 7.792ZM12 17c-5.1 0-9.551-1.934-12-4.809V15.5C0 20.187 5.383 24 12 24s12-3.813 12-8.5v-3.309C21.551 15.066 17.1 17 12 17Z"/></svg>
  