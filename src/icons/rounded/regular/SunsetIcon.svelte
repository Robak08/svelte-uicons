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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 24h-4.078a2 2 0 0 1-1.972-1.712 5.009 5.009 0 0 0-9.9 0A2 2 0 0 1 5.079 24H1a1 1 0 0 1 0-2h4.079a6.842 6.842 0 0 1 .428-1.608L1.982 18.35a1 1 0 0 1 1-1.731l3.529 2.045a7.056 7.056 0 0 1 1.151-1.147l-2.044-3.531a1 1 0 0 1 1.731-1l2.044 3.524A6.964 6.964 0 0 1 11 16.073V12a1 1 0 0 1 2 0v4.072a6.943 6.943 0 0 1 1.606.437l2.045-3.527a1 1 0 1 1 1.731 1l-2.047 3.531a7.055 7.055 0 0 1 1.151 1.147l3.53-2.045a1 1 0 0 1 1 1.731L18.5 20.391a6.873 6.873 0 0 1 .436 1.618L23 22a1 1 0 0 1 0 2ZM8.3 5.708l3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 14.3 4.293L13 5.586V1a1 1 0 0 0-2 0v4.586L9.7 4.293a1 1 0 0 0-1.409 1.415Z"/></svg>
  