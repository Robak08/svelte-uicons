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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.119.872a2.985 2.985 0 0 0-2.405-.857C17.921.285 8.528 1.448 4.9 5.072a9.931 9.931 0 0 0-.671 13.281l-3.94 3.94a1 1 0 0 0 1.414 1.414l3.94-3.94a9.929 9.929 0 0 0 13.285-.667c3.676-3.677 4.8-13.041 5.059-15.823a2.987 2.987 0 0 0-.868-2.405Zm-5.6 16.81a7.925 7.925 0 0 1-10.439.657l9.632-9.632a1 1 0 0 0-1.414-1.414l-9.637 9.632a7.924 7.924 0 0 1 .657-10.439C8.827 3.978 15.745 2.5 20.907 2.005A1 1 0 0 1 22 3.088c-.5 5.387-1.941 12.049-4.486 14.594Z"/></svg>
  