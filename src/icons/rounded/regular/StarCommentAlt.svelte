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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.01 23.67c-.48 0-.96-.17-1.34-.51L6.92 20H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4h-2.85l-3.85 3.18c-.36.32-.83.49-1.29.49ZM4 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3.29c.24 0 .46.08.64.24l4.05 3.41 4.17-3.42c.18-.15.4-.23.64-.23H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4Zm5.01 13.35c-.19 0-.39-.06-.55-.18a.912.912 0 0 1-.32-1.01L9 11.4 6.82 9.63a.92.92 0 0 1-.27-1.01c.13-.36.48-.6.86-.6h2.75l.97-2.61c.13-.36.48-.6.86-.6s.73.24.86.6l.97 2.61h2.75c.38 0 .73.24.86.6s.02.77-.27 1.02l-2.17 1.77.9 2.73c.12.37 0 .78-.31 1.01-.31.24-.73.25-1.06.04L12 13.55l-2.48 1.66c-.15.1-.33.15-.51.15Z"/></svg>
  