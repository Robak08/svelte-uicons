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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H8C5.196 0 3 3.294 3 7.5V17a1.99 1.99 0 0 1-1.259 1.858C.683 19.28 0 20.257 0 21.346a2.656 2.656 0 0 0 2.653 2.653H11c2.757 0 5-2.243 5-5v-2h3c2.804 0 5-3.733 5-8.5S21.804 0 19 0Zm-5 19c0 1.654-1.346 3-3 3H2.653A.654.654 0 0 1 2 21.347c0-.323.249-.538.483-.631A3.983 3.983 0 0 0 5 17V7.5C5 4.259 6.581 2 8 2h7.745C14.672 3.547 14 5.866 14 8.5V19Zm5-4c-1.419 0-3-2.67-3-6.5S17.581 2 19 2s3 2.67 3 6.5-1.581 6.5-3 6.5Zm1-6.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5Z"/></svg>
  