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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-signal-stream-slash {customClass}"><path d="M23.71 23.71c-.2.2-.45.29-.71.29s-.51-.1-.71-.29l-22-22C-.1 1.32-.1.68.29.29s1.03-.39 1.42 0l9.77 9.78c.67-.18 1.41 0 1.93.52s.7 1.26.52 1.93l2.24 2.24c1.28-1.94 1.07-4.59-.64-6.29a.996.996 0 1 1 1.41-1.41 7.01 7.01 0 0 1 .66 9.14l2.14 2.14c3.21-3.92 2.99-9.74-.67-13.4a.996.996 0 1 1 1.41-1.41c4.44 4.44 4.67 11.52.68 16.23l2.54 2.54c.39.39.39 1.02 0 1.41ZM2.68 8.36a.993.993 0 0 0-.57-1.29.99.99 0 0 0-1.29.57c-1.73 4.43-.67 9.48 2.69 12.85.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41A10.008 10.008 0 0 1 2.68 8.37ZM7 12c0-.55-.45-1-1-1s-1 .45-1 1c0 1.87.73 3.63 2.05 4.95.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41c-.94-.94-1.46-2.2-1.46-3.54Z"/></svg>
  