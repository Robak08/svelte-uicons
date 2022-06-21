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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-rainbow {customClass}"><path d="M23 21a1 1 0 0 1-1-1v-5C21.449 1.73 2.546 1.741 2 15v5a1 1 0 0 1-2 0v-5C.661-.924 23.345-.911 24 15v5a1 1 0 0 1-1 1Zm-3-1v-5C19.6 4.4 4.4 4.407 4 15v5a1 1 0 0 0 2 0v-5c.253-7.932 11.75-7.926 12 0v5a1 1 0 0 0 2 0Zm-4 0v-5a4 4 0 0 0-8 0v5a1 1 0 0 0 2 0v-5a2 2 0 0 1 4 0v5a1 1 0 0 0 2 0Z"/></svg>
  