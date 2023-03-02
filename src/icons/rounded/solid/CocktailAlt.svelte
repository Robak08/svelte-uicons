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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m14.869 12.888 8.173-7.551c2.076-1.783.479-5.448-2.2-5.337H3.156A3.169 3.169 0 0 0 .13 4H17a1 1 0 0 1 0 2H1.675l7.462 6.894A4.232 4.232 0 0 0 11 13.87V22H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-8.131a4.253 4.253 0 0 0 1.869-.981Z"/></svg>
  