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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.293 15.895 21 14.602V23c-.006 1.308-1.995 1.307-2 0v-8.398l-1.293 1.293a.999.999 0 1 1-1.414-1.414l1.613-1.614a2.965 2.965 0 0 1 4.187 0l1.614 1.614c.921.928-.486 2.335-1.414 1.414Z"/><path d="M17 0H7a5 5 0 0 0-5 5v15a4 4 0 0 0 4 4h10c1.308-.006 1.307-1.995 0-2H6a2.003 2.003 0 0 1-1.972-2.338C4.19 18.678 5.116 18 6.113 18h7.888c1.308-.006 1.307-1.995 0-2h-6V2h9a3 3 0 0 1 3 3v4c.006 1.308 1.994 1.307 2 0V5a5 5 0 0 0-5-5ZM6 16c-.732 0-1.409.212-2 .556V5c0-1.302.839-2.402 2-2.816V16Z"/></svg>
  