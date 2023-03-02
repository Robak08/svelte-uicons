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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 24H1a1 1 0 0 1 0-2h4.071a6.991 6.991 0 0 1 .429-1.61l-3.518-2.041a1 1 0 0 1 1-1.731l3.528 2.044a7.053 7.053 0 0 1 1.152-1.152l-2.044-3.525a1 1 0 0 1 1.731-1L9.39 16.5a6.991 6.991 0 0 1 1.61-.429V12a1 1 0 0 1 2 0v4.071a6.97 6.97 0 0 1 1.609.433l2.042-3.522a1 1 0 1 1 1.731 1l-2.044 3.528a7.047 7.047 0 0 1 1.151 1.152l3.527-2.044a1 1 0 0 1 1 1.731L18.5 20.39a6.894 6.894 0 0 1 .429 1.61H23a1 1 0 0 1 0 2ZM8.3 5.708l3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 14.3 4.293L13 5.586V1a1 1 0 0 0-2 0v4.586L9.7 4.293a1 1 0 0 0-1.409 1.415Z"/></svg>
  