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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 23h-3c-2.21 0-4-1.79-4-4v-2c0-.55-.45-1-1-1H6c-.88 0-1.71-.39-2.29-1.06-.57-.67-.82-1.56-.67-2.44.23-1.43 1.55-2.5 3.07-2.5H9.5c.43 0 .82-.18 1.11-.49.29-.32.42-.73.38-1.17C10.91 7.59 10.2 7 9.36 7H3C2.12 7 1.29 6.61.71 5.94.14 5.27-.1 4.38.04 3.5.27 2.08 1.59 1 3.11 1h9.07c3.35 0 6.46 1.66 8.32 4.45l1.82 2.73A9.975 9.975 0 0 1 24 13.73v5.28c0 2.21-1.79 4-4 4ZM6.11 12c-.54 0-1.02.36-1.09.82-.05.3.03.6.22.82.19.22.47.35.76.35h6c1.65 0 3 1.35 3 3v2c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-5.28c0-1.59-.46-3.12-1.34-4.44l-1.82-2.73a7.995 7.995 0 0 0-6.66-3.56H3.11c-.54 0-1.02.36-1.09.82-.05.3.03.6.22.82.19.22.47.35.76.35h6.36c1.86 0 3.45 1.38 3.62 3.14a3.502 3.502 0 0 1-3.49 3.86H6.1Z"/></svg>
  