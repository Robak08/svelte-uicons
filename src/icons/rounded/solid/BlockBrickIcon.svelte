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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 17H0v-4h6v4ZM8 0v5h8V0H8ZM0 11h11V7H0v4Zm16 2H8v4h8v-4Zm-3-6v4h11V7H13Zm5-2h6c0-2.757-2.243-5-5-5h-1v5Zm-5 19h6c2.757 0 5-2.243 5-5H13v5Zm-2-5H0c0 2.757 2.243 5 5 5h6v-5ZM6 0H5C2.243 0 0 2.243 0 5h6V0Zm18 13h-6v4h6v-4Z"/></svg>
  