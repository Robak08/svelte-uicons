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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.99 7.12c-.06-1.95-.89-3.77-2.36-5.14A7.457 7.457 0 0 0 16.28 0c-1.99.08-3.84.92-5.19 2.38-.63.68-2.1 2.26-6.25 9.86-.75 1.38-1.82 3.12-2.76 4.65-.71 1.16-1.33 2.17-1.71 2.85-.38.68-.46 1.47-.24 2.22.23.75.73 1.36 1.42 1.72a2.842 2.842 0 0 0 3.82-1.14c.35-.63.95-1.61 1.65-2.75.97-1.58 2.07-3.36 2.85-4.81 3.33-6.1 4.8-8.05 5.41-8.7.65-.7 1.75-.75 2.44-.1.48.45.63 1.13.36 1.84-.18.38-.27.79-.27 1.22 0 1.33.89 2.76 2.84 2.76 1.26 0 2.4-.77 2.83-1.93.36-.97.53-1.96.5-2.95ZM21.44 5h-2.07c-.09-.1-.18-.19-.27-.28-.33-.3-.7-.54-1.09-.7V2.19c.84.23 1.61.66 2.27 1.26.49.46.88.98 1.17 1.55Zm-11.05 5h-2c.71-1.23 1.3-2.21 1.8-3h2.06c-.59.88-1.22 1.92-1.86 3Zm-2.27 4.02c-.17.31-.35.64-.55.98h-2c.37-.63.73-1.24 1.03-1.8l.66-1.2h1.98c-.39.69-.77 1.37-1.12 2.02Zm-2.8 4.71c-.71 1.16-1.32 2.15-1.7 2.82-.23.41-.73.56-1.15.34a.87.87 0 0 1-.36-1.19c.36-.64.99-1.68 1.67-2.77.19-.31.39-.63.58-.95h2.01l-1.06 1.74ZM13.8 4.94s-.04.04-.05.06h-2.22c.52-.71.83-1.05 1.03-1.26A5.45 5.45 0 0 1 16 2.02v1.74c-.81.12-1.59.52-2.2 1.17Zm7.81 4.43c-.17.46-.62.63-.95.63-.21 0-.84 0-.84-.76 0-.13.03-.26.09-.4.27-.6.36-1.23.31-1.83h1.76v.18c.02.73-.11 1.47-.38 2.19Z"/></svg>
  