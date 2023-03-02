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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.832 24a1.5 1.5 0 0 1-1.061-2.561l7.672-7.671a2.5 2.5 0 0 0 0-3.536l-7.672-7.671A1.5 1.5 0 0 1 12.893.439l7.671 7.672a5.5 5.5 0 0 1 0 7.778l-7.671 7.672a1.5 1.5 0 0 1-1.061.439Z"/><path d="M2.287 24a1.5 1.5 0 0 1-1.06-2.561l9.085-9.085a.5.5 0 0 0 0-.708L1.227 2.561A1.5 1.5 0 0 1 3.348.439l9.086 9.086a3.507 3.507 0 0 1 0 4.949l-9.086 9.087A1.5 1.5 0 0 1 2.287 24Z"/></svg>
  