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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-microchip {customClass}"><path d="M16 7H8c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1Zm-1 8H9V9h6v6Zm8-4c.55 0 1-.45 1-1s-.45-1-1-1h-1V7h1c.55 0 1-.45 1-1s-.45-1-1-1h-1.42A5.036 5.036 0 0 0 19 2.42V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V1c0-.55-.45-1-1-1S9 .45 9 1v1H7V1c0-.55-.45-1-1-1S5 .45 5 1v1.42C3.85 2.92 2.93 3.85 2.42 5H1c-.55 0-1 .45-1 1s.45 1 1 1h1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h1.42c.5 1.15 1.43 2.07 2.58 2.58V23c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1.42c1.15-.5 2.07-1.43 2.58-2.58H23c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1Zm-6 9H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3Z"/></svg>
  