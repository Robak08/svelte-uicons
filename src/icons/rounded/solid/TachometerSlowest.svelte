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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 13a11.942 11.942 0 0 0 3.186 8.133 2.316 2.316 0 0 0 3.9-.487l.629-1.132A1 1 0 0 1 8.588 19h6.824a1 1 0 0 1 .874.514l.612 1.1a2.318 2.318 0 0 0 3.964.465C30.716 9.486 15.633-5.655 4 4.052A12.016 12.016 0 0 0 0 13Zm5.143 1.918 4.868-2.137a2 2 0 1 1 .8 1.833L5.948 16.75a1 1 0 1 1-.805-1.832Z"/></svg>
  