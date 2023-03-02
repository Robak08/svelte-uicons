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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.94 1.71c-.67-.57-1.56-.82-2.44-.67-1.43.23-2.5 1.55-2.5 3.07v4.07a3 3 0 0 0-3 .6 3 3 0 0 0-3-.6V3.11C10 1.59 8.92.27 7.5.04A2.998 2.998 0 0 0 4 3v8.65l-1.5 1.5c-.96.96-1.5 2.24-1.5 3.6s.53 2.64 1.49 3.6l1.59 1.59a6.96 6.96 0 0 0 4.95 2.05H16c3.31 0 6-2.69 6-6V4c0-.88-.39-1.71-1.06-2.29ZM15 10c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1Zm-4 0c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1ZM6.35 2.24c.23-.19.52-.27.82-.22.46.08.82.56.82 1.09v7.88c-.6-.39-1.31-.53-2-.45V3c0-.29.13-.57.35-.76ZM20 18c0 2.21-1.79 4-4 4H9.03a5.01 5.01 0 0 1-3.54-1.46L3.9 18.95c-.58-.58-.91-1.36-.91-2.19s.32-1.6.91-2.19l1.77-1.76a.996.996 0 1 1 1.41 1.41l-2.04 2.04a.996.996 0 1 0 1.41 1.41l2.04-2.04c.15-.15.29-.32.4-.49a2.988 2.988 0 0 0 4.1.09c.53.48 1.23.77 2 .77 1.65 0 3-1.35 3-3V4.11c0-.54.36-1.02.82-1.09.3-.05.6.03.82.22.22.19.35.47.35.76v14Z"/></svg>
  