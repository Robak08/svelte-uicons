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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.71 22.29-6.91-6.91s.02-.05.03-.08l.22-1.24h.15c1.18 0 1.82-.94 1.82-1.82 0-1.29-2.93-6.01-4.18-7.41A8.505 8.505 0 0 0 8.51 2c-1.42 0-2.8.37-4.04 1.05L1.71.29C1.32-.1.68-.1.29.29s-.39 1.03 0 1.42l22 22c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41ZM21 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm3 2c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm0-4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm-13.5 7h-5C4.1 22 3 20.85 3 19.38v-.73c0-.75-.23-1.44-.65-1.96-1.5-1.83-2.37-4.15-2.35-6.2 0-1.38.33-2.72 1-3.96a1.011 1.011 0 0 1 1.6-.24l11 11c.29.29.37.72.22 1.09-.14.34-.45.57-.81.61v.51a2.5 2.5 0 0 1-2.5 2.5Z"/></svg>
  