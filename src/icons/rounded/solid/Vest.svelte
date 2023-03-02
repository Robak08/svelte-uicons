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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 24H6c-2.757 0-5-2.243-5-5v-2h6a1 1 0 1 0 0-2H1v-1.666c0-1.019.304-1.998.88-2.83C2.592 9.473 3 8.561 3 8V5.065a4.976 4.976 0 0 1 3.611-4.8L11 12.179V24Zm1-14.893L15.352.008C15.142 0 15.011 0 15 0H9c-.011 0-.142 0-.352.008L12 9.107ZM17 17a1 1 0 1 1 0-2h6v-1.666a4.948 4.948 0 0 0-.88-2.83C21.408 9.473 21 8.561 21 8V5.065A4.977 4.977 0 0 0 17.389.264L13 12.178v11.821h5c2.757 0 5-2.243 5-5v-2h-6Z"/></svg>
  