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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.962 7.725 22.79 3.626A5.022 5.022 0 0 0 17.982 0H17v4c-.006 1.308-1.995 1.307-2 0V0H9v4c-.006 1.308-1.994 1.307-2 0V0h-.983a5.023 5.023 0 0 0-4.808 3.626L.039 7.725C-.122 8.791.353 9.863 1 10.618V20c0 2.206 1.794 4 4 4h6c2.206 0 4-1.794 4-4v-8.556a4.001 4.001 0 0 0 1-.826A3.974 3.974 0 0 0 19 12h1c.347 0 .678-.058 1-.142V23c.006 1.308 1.995 1.307 2 0V10.618c.648-.754 1.122-1.826.962-2.893ZM13 17H3v-5.142c.322.084.653.142 1 .142h1c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382h2v5Z"/></svg>
  