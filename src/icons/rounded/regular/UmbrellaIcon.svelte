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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.717 9.549A12.834 12.834 0 0 0 13 2.043V1a1 1 0 0 0-2 0v1.043A12.843 12.843 0 0 0 .267 9.549a3.945 3.945 0 0 0 .405 3.682A4.015 4.015 0 0 0 4 15h7v6a1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 6 0v-6h6.983a4.017 4.017 0 0 0 3.329-1.769 3.948 3.948 0 0 0 .405-3.682zm-2.061 2.561a1.993 1.993 0 0 1-1.673.89H4a1.992 1.992 0 0 1-1.673-.891 1.927 1.927 0 0 1-.2-1.818C3.581 6.646 7.734 4 12 4a10.809 10.809 0 0 1 9.859 6.291 1.923 1.923 0 0 1-.203 1.819z"/></svg>
  