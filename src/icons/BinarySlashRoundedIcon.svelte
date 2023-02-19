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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-binary-slash {customClass}"><path d="M18.14 22.32c.23.5 0 1.1-.5 1.32A3.999 3.999 0 0 1 12 19.99v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 1.1.9 2 2 2 .29 0 .56-.06.82-.18.5-.23 1.1 0 1.32.5ZM16.26 4.15l.74-.74V10c0 .55.45 1 1 1s1-.45 1-1V1c0-.4-.24-.77-.62-.92a.984.984 0 0 0-1.09.22l-2.44 2.44a.996.996 0 1 0 1.41 1.41Zm-7.88 8.92a.984.984 0 0 0-1.09.22l-2.44 2.44a.996.996 0 1 0 1.41 1.41L7 16.4v6.59c0 .55.45 1 1 1s1-.45 1-1V14c0-.4-.24-.77-.62-.92ZM23.7 23.7c-.2.2-.45.29-.71.29s-.51-.1-.71-.29L.29 1.71C-.1 1.32-.1.68.29.29s1.03-.39 1.42 0l2.5 2.5C4.73 1.18 6.22 0 8 0c2.21 0 4 1.79 4 4v3c0 .97-.35 1.89-.97 2.61l3.63 3.63c.43-.15.88-.24 1.34-.24 2.21 0 4 1.79 4 4v1.59l3.71 3.71c.39.39.39 1.02 0 1.41ZM6 4.59l3.6 3.6c.25-.34.4-.75.4-1.18v-3c0-1.1-.9-2-2-2s-2 .9-2 2v.59Z"/></svg>
  