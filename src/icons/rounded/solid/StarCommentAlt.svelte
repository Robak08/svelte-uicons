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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 0H4C1.79 0 0 1.79 0 4v12c0 2.21 1.79 4 4 4h2.92l3.75 3.16c.38.34.86.51 1.34.51s.93-.16 1.29-.49L17.15 20H20c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4Zm-2.83 9.62L15 11.39l.9 2.73c.12.37 0 .78-.31 1.01-.31.24-.73.25-1.06.04l-2.52-1.64-2.48 1.66c-.15.1-.33.15-.51.15-.19 0-.39-.06-.55-.18a.912.912 0 0 1-.32-1.01l.86-2.76-2.18-1.77a.92.92 0 0 1-.27-1.01c.13-.36.48-.6.86-.6h2.75l.97-2.61c.13-.36.48-.6.86-.6s.73.24.86.6l.97 2.61h2.75c.38 0 .73.24.86.6s.02.77-.27 1.02Z"/></svg>
  