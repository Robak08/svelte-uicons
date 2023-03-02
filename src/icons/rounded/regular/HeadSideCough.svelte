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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 18c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm2-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm3-2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm0 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1ZM8 21h.49c2.5 0 4.63-1.87 4.96-4.34l.22-1.66H14c1.3 0 2-1.03 2-2 0-1.42-2.93-7.02-4.2-8.58C9.36 1.16 5.5-.45 1.45.11 1.23.14 1.01.18.8.22.26.33-.09.85.02 1.39c.11.54.63.89 1.18.78.17-.04.35-.06.53-.09 3.31-.45 6.48.87 8.5 3.56 1.32 1.63 3.7 6.55 3.78 7.35H12.8c-.5 0-.93.37-.99.87l-.33 2.52a3.014 3.014 0 0 1-2.97 2.61H7.02c-.55 0-1 .45-1 1v1c0 .55-.45 1-1 1H1c-.55 0-1 .45-1 1s.45 1 1 1h4c1.65 0 3-1.35 3-3Z"/></svg>
  