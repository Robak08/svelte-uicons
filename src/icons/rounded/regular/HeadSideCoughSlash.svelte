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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.71 22.29-6.91-6.91s.02-.05.03-.08l.22-1.24h.15c1.18 0 1.82-.94 1.82-1.82 0-1.29-2.93-6.01-4.18-7.41A8.505 8.505 0 0 0 8.51 2c-1.42 0-2.8.37-4.04 1.04L1.71.29C1.32-.1.68-.1.29.29s-.39 1.03 0 1.42l22 22c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41ZM8.5 4c1.85 0 3.61.79 4.84 2.16 1.21 1.36 3.27 4.94 3.62 5.9h-.76c-.48 0-.9.35-.98.82l-.14.79-9.14-9.14C6.74 4.19 7.61 4 8.5 4ZM14 18c0 .55-.45 1-1 1v.5a2.5 2.5 0 0 1-2.5 2.5h-5C4.1 22 3 20.85 3 19.38v-.73c0-.74-.23-1.44-.66-1.96C.85 14.86-.03 12.54 0 10.49 0 9.03.38 7.58 1.11 6.3c.27-.48.88-.65 1.36-.37.48.27.65.88.37 1.36-.55.97-.85 2.08-.85 3.21-.02 1.59.71 3.47 1.89 4.92.71.87 1.11 2.02 1.11 3.22v.73c0 .37.2.62.5.62h5c.28 0 .5-.22.5-.5v-1.5c0-.55.45-1 1-1h1c.55 0 1 .45 1 1Zm5-1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm3 2c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm0-4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Z"/></svg>
  