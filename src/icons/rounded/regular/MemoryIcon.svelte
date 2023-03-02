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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.28 8.46c.43-.12.72-.52.72-.96V6c0-2.21-1.79-4-4-4H4C1.79 2 0 3.79 0 6v1.5c0 .44.29.83.71.96C.84 8.5 2 8.89 2 10S.85 11.5.72 11.54c-.43.12-.72.52-.72.96V19c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-6.5c0-.44-.29-.83-.71-.96C23.16 11.5 22 11.11 22 10s1.15-1.5 1.28-1.54ZM2 19v-1h3v2H3c-.55 0-1-.45-1-1Zm15 1h-2v-2h2v2Zm-4 0h-2v-2h2v2Zm-4 0H7v-2h2v2Zm12 0h-2v-2h3v1c0 .55-.45 1-1 1Zm1-13.16c-.92.5-2 1.51-2 3.16s1.08 2.66 2 3.16V16H2v-2.84c.92-.5 2-1.51 2-3.16S2.92 7.34 2 6.84V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v.84ZM13 7v6c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1ZM8 7v6c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1Zm10 0v6c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1Z"/></svg>
  