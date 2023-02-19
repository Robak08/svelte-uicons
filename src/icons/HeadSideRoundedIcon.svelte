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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-head-side {customClass}"><path d="M16 21h.49c2.5 0 4.63-1.87 4.96-4.34l.22-1.66H22c1.3 0 2-1.03 2-2 0-1.42-2.93-7.01-4.2-8.58C17.36 1.16 13.49-.45 9.45.11 4.46.79.5 4.95.05 9.98c-.25 2.77.54 5.5 2.21 7.69.48.62.74 1.46.74 2.35v.97c0 1.65 1.35 3 3 3h7c1.65 0 3-1.35 3-3Zm2.22-15.35C19.53 7.27 21.87 12.1 22 13h-1.2c-.5 0-.93.37-.99.87l-.33 2.52A3.014 3.014 0 0 1 16.51 19h-1.49c-.55 0-1 .45-1 1v1c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-.97c0-1.33-.41-2.6-1.15-3.57a8.984 8.984 0 0 1-1.81-6.3c.37-4.12 3.6-7.51 7.69-8.07.43-.06.86-.09 1.28-.09 2.83 0 5.46 1.3 7.22 3.65Z"/></svg>
  