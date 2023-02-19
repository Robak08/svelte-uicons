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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-bell-concierge {customClass}"><path d="M21.402 18A2.601 2.601 0 0 0 24 15.402V14c0-6.28-4.849-11.448-11-11.958V1a1 1 0 0 0-2 0v1.042C4.849 2.552 0 7.72 0 14v1.402A2.601 2.601 0 0 0 2.598 18H11v2H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2H13v-2h8.402ZM2 15.402V14C2 8.486 6.486 4 12 4s10 4.486 10 10v1.402c0 .33-.269.598-.598.598H2.598A.599.599 0 0 1 2 15.402Z"/></svg>
  